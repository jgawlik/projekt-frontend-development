import { Component, OnInit } from '@angular/core';
import { Category, Cosmetic } from './data-models';
import { CategoryService } from './category.service';
import { CosmeticService } from './cosmetic.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cosmetic-categories',
  templateUrl: './cosmetic-categories.component.html',
  styleUrls: ['./cosmetic-categories.component.css'],
})
export class CosmeticCategoriesComponent implements OnInit {
  categoryList: Category[];
  cosmeticsList: Cosmetic[];
  message: string;

  constructor(
    private router: Router,
    private CategoryService: CategoryService,
    private CosmeticService: CosmeticService) { }

  getCategories(): void {
     this.CategoryService
        .getCategories()
        .then(categories => this.categoryList = categories);
  }

  getCosmetics(): void {
     this.CosmeticService
        .getCosmetics()
        .then(cosmetics => this.cosmeticsList = cosmetics);
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

  delete(category: Category): void {
    const ifAnyCosmeticHasThisCat = this.getCosmeticsByCategory(category.id);
    this.message = 'Nie można usunąć kategori o id ' + category.id + ' ponieważ istnieje kosmetyk mający przypisaną taka kategorię!';
    if (ifAnyCosmeticHasThisCat.length === 0) {
      this.CategoryService
          .delete(category.id)
          .then(() => {
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
