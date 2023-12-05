import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereportsComponent } from './purchasereports.component';

describe('PurchasereportsComponent', () => {
  let component: PurchasereportsComponent;
  let fixture: ComponentFixture<PurchasereportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchasereportsComponent]
    });
    fixture = TestBed.createComponent(PurchasereportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
