import { Component, OnInit } from '@angular/core';
import { Category } from './../data-models';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from './../services/category.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.css']
})
export class CategoryModifyComponent implements OnInit {
   category: Category;

   constructor(
      private CategoryService: CategoryService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
    ) {}

  ngOnInit() {
     this.route.params
        .switchMap((params: Params) => this.CategoryService.getCategory(+params['idCategory']))
        .subscribe(category => this.category = category);
  }

  save(): void {
    this.CategoryService.update(this.category)
      .then(() => this.goBack());
    // TODO
    // Potrzebujemy jeszcze zaktualizować kategorię dla powiązanych kosmetyków
  }

  goBack(): void {
    this.location.back();
  }

}
