import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySalesPopupComponent } from './daily-sales-popup.component';

describe('DailySalesPopupComponent', () => {
  let component: DailySalesPopupComponent;
  let fixture: ComponentFixture<DailySalesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySalesPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySalesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
