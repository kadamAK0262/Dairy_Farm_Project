import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocietyPopupComponent } from './update-society-popup.component';

describe('UpdateSocietyPopupComponent', () => {
  let component: UpdateSocietyPopupComponent;
  let fixture: ComponentFixture<UpdateSocietyPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSocietyPopupComponent]
    });
    fixture = TestBed.createComponent(UpdateSocietyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
