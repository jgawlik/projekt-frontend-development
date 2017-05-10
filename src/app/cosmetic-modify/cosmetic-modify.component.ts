import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Cosmetic, Category } from './../data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CosmeticService } from './../services/cosmetic.service';
import { CategoryService } from './../services/category.service';
import { formErrors, validationMessages } from './../various/validationCosmetic';
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

  name: AbstractControl;
  ingredients: AbstractControl;
  producer: AbstractControl;
  price: AbstractControl;
  category: AbstractControl;
  constructor(
    private CosmeticService: CosmeticService,
    private CategoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
  ) { }

  getCategories(): void {
    this.CategoryService
      .getCategories()
      .subscribe(categories => this.categories = categories);
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
          'ingredients': [this.cosmetic.ingredients, Validators.compose([Validators.required, Validators.minLength(5)])],
          'producer': [this.cosmetic.producer, Validators.required],
          'price': [this.cosmetic.price, Validators.required],
          'category': [this.cosmetic.category.id, Validators.required],
        });
        this.name = this.myForm.controls['name'];
        this.ingredients = this.myForm.controls['ingredients'];
        this.producer = this.myForm.controls['producer'];
        this.price = this.myForm.controls['price'];
        this.category = this.myForm.controls['category'];
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
      name: formModel.name as string,
      ingredients: formModel.ingredients as string,
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
