import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecustomerPopupComponent } from './updatecustomer-popup.component';

describe('UpdatecustomerPopupComponent', () => {
  let component: UpdatecustomerPopupComponent;
  let fixture: ComponentFixture<UpdatecustomerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecustomerPopupComponent]
    });
    fixture = TestBed.createComponent(UpdatecustomerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
