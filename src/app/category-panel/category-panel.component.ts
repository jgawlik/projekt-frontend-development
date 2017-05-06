import { Component, OnInit } from '@angular/core';
import { Category, Cosmetic } from './../data-models';
import { CategoryService } from './../services/category.service';
import { CosmeticService } from './../services/cosmetic.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css']
})
export class CategoryPanelComponent implements OnInit {
  categoryList: Category[];
  cosmeticsList: Cosmetic[];
  message: string;
  showForm = false;

  constructor(
    private router: Router,
    private CategoryService: CategoryService,
    private CosmeticService: CosmeticService) { }

  getCategories(): void {
     this.CategoryService
        .getCategories()
        .subscribe(categories => this.categoryList = categories);
  }

  getCosmetics(): void {
     this.CosmeticService
        .getCosmetics()
        .subscribe(cosmetics => this.cosmeticsList = cosmetics);
  }

  // Zwracamy albo pusty array albo array z elemntami, jesli mają żądaną kategorię
  getCosmeticsByCategory(categoryId): Cosmetic[] {
    let returnArray: Cosmetic[];
    returnArray = [];
    if (this.cosmeticsList) {
      for (let entry of this.cosmeticsList) {
        if (entry.category.id === categoryId) {
            returnArray.push(entry);
        }
      }
    }
      return returnArray;
  }



  addNewCategory(categoryName: string, event: Event): void {
    event.preventDefault();
    categoryName = categoryName.trim();
    if (!categoryName || categoryName.length === 0) {
      return;
    }
    this.CategoryService.create(categoryName)
      .subscribe(category => {
        this.categoryList.push(category);
        this.showForm = false;
      });
  }

  delete(category: Category): void {
    const ifAnyCosmeticHasThisCat = this.getCosmeticsByCategory(category.id);
    this.message = 'Nie można usunąć kategori o id ' + category.id + ' ponieważ istnieje kosmetyk mający przypisaną taka kategorię!';
    if (ifAnyCosmeticHasThisCat.length === 0) {
      this.CategoryService
          .delete(category.id)
          .subscribe(() => {
            this.categoryList = this.categoryList.filter(h => h !== category);
          });
        this.message = 'Usunięto kategorię o id ' + category.id;
    }
  }

  ngOnInit(): void {
    this.getCategories();
    this.getCosmetics();
  }

}
