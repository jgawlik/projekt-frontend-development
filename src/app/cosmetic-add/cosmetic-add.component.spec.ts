import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticAddComponent } from './cosmetic-add.component';

describe('CosmeticAddComponent', () => {
  let component: CosmeticAddComponent;
  let fixture: ComponentFixture<CosmeticAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
