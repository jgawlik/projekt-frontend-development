import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticCategoriesComponent } from './cosmetic-categories.component';

describe('CosmeticTypesComponent', () => {
  let component: CosmeticCategoriesComponent;
  let fixture: ComponentFixture<CosmeticCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
