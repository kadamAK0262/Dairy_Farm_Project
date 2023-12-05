import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdashboardComponent } from './reportdashboard.component';

describe('ReportdashboardComponent', () => {
  let component: ReportdashboardComponent;
  let fixture: ComponentFixture<ReportdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportdashboardComponent]
    });
    fixture = TestBed.createComponent(ReportdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
