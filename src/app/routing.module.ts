import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CosmeticInformationComponent } from './cosmetic-information.component';
import { CosmeticService } from './cosmetic.service';
import { CosmeticPanelComponent } from './cosmetic-panel.component';
import { CosmeticCategoriesComponent } from './cosmetic-categories.component';

const routes: Routes = [
  { path: 'cosmetics-panel', component: CosmeticPanelComponent },
  { path: 'categories', component: CosmeticCategoriesComponent },
  { path: '', redirectTo: '/cosmetics-panel', pathMatch: 'full' },
  { path: 'information/:id', component: CosmeticInformationComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
