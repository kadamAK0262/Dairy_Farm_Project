import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomerdetailsComponent } from './update-customerdetails.component';

describe('UpdateCustomerdetailsComponent', () => {
  let component: UpdateCustomerdetailsComponent;
  let fixture: ComponentFixture<UpdateCustomerdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCustomerdetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateCustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
