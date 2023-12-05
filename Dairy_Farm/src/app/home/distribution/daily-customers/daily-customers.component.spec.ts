import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCustomersComponent } from './daily-customers.component';

describe('DailyCustomersComponent', () => {
  let component: DailyCustomersComponent;
  let fixture: ComponentFixture<DailyCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyCustomersComponent]
    });
    fixture = TestBed.createComponent(DailyCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
