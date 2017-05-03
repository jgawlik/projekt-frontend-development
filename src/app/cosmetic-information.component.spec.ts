import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticInformationComponent } from './cosmetic-information.component';

describe('CosmeticInformationComponent', () => {
  let component: CosmeticInformationComponent;
  let fixture: ComponentFixture<CosmeticInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
