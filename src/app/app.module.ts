import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockedDatabaseService } from './mocked-database.service';

import { AppComponent } from './app.component';
import { CosmeticInformationComponent } from './cosmetic-information.component';
import { CosmeticService } from './cosmetic.service';
import { CosmeticPanelComponent } from './cosmetic-panel.component';
import { CosmeticCategoriesComponent } from './cosmetic-categories.component';

import { RoutingModule } from './routing.module';
import { CategoryService } from './category.service';

@NgModule({
  declarations: [
    AppComponent,
    CosmeticInformationComponent,
    CosmeticPanelComponent,
    CosmeticCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(MockedDatabaseService),
  ],
  providers: [CosmeticService, CategoryService],
  bootstrap: [AppComponent],
})

export class AppModule {}
