import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Cosmetic, Category } from './../data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CosmeticService } from './../cosmetic.service';
import { CategoryService } from './../category.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cosmetic-modify',
  templateUrl: './cosmetic-modify.component.html',
  styleUrls: ['./cosmetic-modify.component.css']
})
export class CosmeticModifyComponent implements OnInit {
  cosmetic: Cosmetic;
  categories: Category[];
  myForm: FormGroup;

  constructor(
    private CosmeticService: CosmeticService,
    private CategoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder
  ) { }

  getCategories(): void {
    this.CategoryService
      .getCategories()
      .then(categories => this.categories = categories);
  }

  getCategoryById(id: number): Category {
    let selectedCategory;
    this.categories.forEach(element => {
      if (element.id === id) {
        selectedCategory = element;
      }
    });

    return selectedCategory;
  }

  ngOnInit(): void {
    this.getCategories();
    this.route.params
      .switchMap((params: Params) => this.CosmeticService.getCosmetic(+params['id']))
      .subscribe((cosmetic: Cosmetic) => {
        this.cosmetic = cosmetic;
        this.myForm = this.fb.group({
          'name': [this.cosmetic.name, Validators.compose([Validators.required, Validators.minLength(3)])],
          'ingredients': [this.cosmetic.ingredients],
          'producer': [this.cosmetic.producer],
          'price': [this.cosmetic.price],
          'category': [this.cosmetic.category.id],
        });
      });
  }

  save(): void {
    this.cosmetic = this.prepareCosmeticToSave();
    this.CosmeticService.update(this.cosmetic)
      .subscribe(() => this.goBack());
  }
   prepareCosmeticToSave(): Cosmetic {
    const formModel = this.myForm.value;
    const saveCosmetic: Cosmetic = {
      id: this.cosmetic.id,
      ingredients: formModel.ingredients as string,
      name: formModel.name as string,
      price: formModel.price as number,
      producer: formModel.producer as string,
      category: this.getCategoryById(formModel.category) as Category
    };

    return saveCosmetic;
  }

  goBack(): void {
        this.location.back();
  }

}
