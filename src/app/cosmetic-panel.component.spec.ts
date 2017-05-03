import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticPanelComponent } from './cosmetic-panel.component';

describe('CosmeticPanelComponent', () => {
  let component: CosmeticPanelComponent;
  let fixture: ComponentFixture<CosmeticPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
