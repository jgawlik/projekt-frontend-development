import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticCategoriesDetailsComponent } from './cosmetic-categories-details.component';

describe('CosmeticCategoriesDetailsComponent', () => {
  let component: CosmeticCategoriesDetailsComponent;
  let fixture: ComponentFixture<CosmeticCategoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticCategoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticCategoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
