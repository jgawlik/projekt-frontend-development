import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticModifyComponent } from './cosmetic-modify.component';

describe('CosmeticModifyComponent', () => {
  let component: CosmeticModifyComponent;
  let fixture: ComponentFixture<CosmeticModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
