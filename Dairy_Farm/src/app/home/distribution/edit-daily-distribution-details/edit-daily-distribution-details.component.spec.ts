import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDailyDistributionDetailsComponent } from './edit-daily-distribution-details.component';

describe('EditDailyDistributionDetailsComponent', () => {
  let component: EditDailyDistributionDetailsComponent;
  let fixture: ComponentFixture<EditDailyDistributionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditDailyDistributionDetailsComponent]
    });
    fixture = TestBed.createComponent(EditDailyDistributionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
