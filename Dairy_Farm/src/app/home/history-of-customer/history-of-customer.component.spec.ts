import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfCustomerComponent } from './history-of-customer.component';

describe('HistoryOfCustomerComponent', () => {
  let component: HistoryOfCustomerComponent;
  let fixture: ComponentFixture<HistoryOfCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryOfCustomerComponent]
    });
    fixture = TestBed.createComponent(HistoryOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
