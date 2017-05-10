import { Component, OnInit } from '@angular/core';
import { Category, Cosmetic } from './../data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from './../services/category.service';
import { CosmeticService } from './../services/cosmetic.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.css']
})
export class CategoryModifyComponent implements OnInit {
  category: Category;
  cosmeticsForCategory: Cosmetic[];
  // existingCategoriesName: Array<string> = [];

  constructor(
    private CategoryService: CategoryService,
    private CosmeticService: CosmeticService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.CategoryService.getCategory(+params['idCategory']))
      .subscribe((category) => {
        this.category = category;
        // this.getExistingCategoryNamesWithoutEditing(this.category.id);
      });
  }

  save(): void {
    this.CategoryService.update(this.category)
      .subscribe(() => {
        this.CosmeticService.getCosmeticsForCategory(this.category.id).subscribe(
          (cosmetics) => {
            cosmetics.forEach(element => {
              element.category = this.category;
              this.CosmeticService.update(element).subscribe(() => this.goBack());
            });
          }
        );
      });
  }

  // getExistingCategoryNamesWithoutEditing(editingCategoryId: number) {
  //   this.CategoryService.getCategories()
  //     .subscribe((categories) => {
  //       categories.forEach(element => {
  //         if (element.id !== editingCategoryId) {
  //           this.existingCategoriesName.push(element.categoryName);
  //         }
  //       });
  //     });
  // }

  goBack(): void {
    this.location.back();
  }
}
