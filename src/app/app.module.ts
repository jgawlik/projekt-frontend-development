import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedDatabaseService } from './mocked-database.service';

import { AppComponent } from './app.component';
import { CosmeticPanelComponent } from './cosmetic-panel/cosmetic-panel.component';
import { CosmeticProductComponent } from './cosmetic-product/cosmetic-product.component';
import { CosmeticModifyComponent } from './cosmetic-modify/cosmetic-modify.component';
import { CategoryPanelComponent } from './category-panel/category-panel.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';

import { RoutingModule } from './routing.module';
import { CategoryService } from './services/category.service';
import { ReviewService } from './services/review.service';
import { CosmeticService } from './services/cosmetic.service';
import { CosmeticAddComponent } from './cosmetic-add/cosmetic-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CosmeticPanelComponent,
    CosmeticProductComponent,
    CosmeticModifyComponent,
    CategoryPanelComponent,
    CategoryModifyComponent,
    CosmeticAddComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(MockedDatabaseService),
  ],
  providers: [CosmeticService, CategoryService, ReviewService],
  bootstrap: [AppComponent],
})

export class AppModule { }
