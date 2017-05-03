import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CosmeticInformationComponent } from './cosmetic-information.component';
import { CosmeticService } from './cosmetic.service';
import { CosmeticPanelComponent } from './cosmetic-panel.component';
import { CosmeticCategoriesComponent } from './cosmetic-categories.component';
import { CosmeticCategoriesDetailsComponent } from './cosmetic-categories-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/cosmetics-panel', pathMatch: 'full' },
  { path: 'cosmetics-panel', component: CosmeticPanelComponent },
  { path: 'categories', component: CosmeticCategoriesComponent },
  { path: 'categories/details/:idCategory', component: CosmeticCategoriesDetailsComponent },
  { path: 'information/:id', component: CosmeticInformationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
