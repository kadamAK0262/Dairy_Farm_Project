import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecustomerPopupComponent } from './deletecustomer-popup.component';

describe('DeletecustomerPopupComponent', () => {
  let component: DeletecustomerPopupComponent;
  let fixture: ComponentFixture<DeletecustomerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletecustomerPopupComponent]
    });
    fixture = TestBed.createComponent(DeletecustomerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
