import { Component, OnInit } from '@angular/core';
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
  selector: 'app-cosmetic-add',
  templateUrl: './cosmetic-add.component.html',
  styleUrls: ['./cosmetic-add.component.css']
})
export class CosmeticAddComponent implements OnInit {
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
    private fb: FormBuilder
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

  ngOnInit() {
    this.getCategories();
    this.myForm = this.fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'ingredients': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'producer': [null, Validators.required],
      'price': [null, Validators.required],
      'category': [null, Validators.required],
    });

    this.name = this.myForm.controls['name'];
    this.ingredients = this.myForm.controls['ingredients'];
    this.producer = this.myForm.controls['producer'];
    this.price = this.myForm.controls['price'];
    this.category = this.myForm.controls['category'];
  }

  save(): void {
    if (this.myForm.invalid) {
      return;
    }
    const formModel = this.myForm.value;
    const newCategory = this.getCategoryById(formModel.category);
    this.CosmeticService.create(formModel.name, formModel.ingredients, formModel.price, formModel.producer, newCategory)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
