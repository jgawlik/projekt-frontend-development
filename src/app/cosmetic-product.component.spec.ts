import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticProductComponent } from './cosmetic-product.component';

describe('CosmeticProductComponent', () => {
  let component: CosmeticProductComponent;
  let fixture: ComponentFixture<CosmeticProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
