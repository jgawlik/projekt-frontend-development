import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CosmeticPanelComponent } from './cosmetic-panel/cosmetic-panel.component';
import { CosmeticModifyComponent } from './cosmetic-modify/cosmetic-modify.component';
import { CosmeticAddComponent } from './cosmetic-add/cosmetic-add.component';
import { CosmeticProductComponent } from './cosmetic-product/cosmetic-product.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';

const routes: Routes = [
  { path: '', redirectTo: '/cosmetics', pathMatch: 'full' },
  { path: 'cosmetics', component: CosmeticPanelComponent },
  { path: 'categories', component: CategoryPanelComponent },
  { path: 'categories/details/:idCategory', component: CategoryModifyComponent },
  { path: 'cosmetics/details/:id', component: CosmeticModifyComponent },
  { path: 'cosmetics/add', component: CosmeticAddComponent },
  { path: 'cosmetics/product/:id', component: CosmeticProductComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
