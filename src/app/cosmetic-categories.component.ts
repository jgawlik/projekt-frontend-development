import { Component, OnInit } from '@angular/core';
import { Category } from './data-models';
import { CategoryService } from './category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cosmetic-categories',
  templateUrl: './cosmetic-categories.component.html',
  styleUrls: ['./cosmetic-categories.component.css'],
})
export class CosmeticCategoriesComponent implements OnInit {
  categoryList: Category[];

  constructor(
    private router: Router,
    private CategoryService: CategoryService) { }

  getCategories(): void {
     this.CategoryService
        .getCategories()
        .then(categories => this.categoryList = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
