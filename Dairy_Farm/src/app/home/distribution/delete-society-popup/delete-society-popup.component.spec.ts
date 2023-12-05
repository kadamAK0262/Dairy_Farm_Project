import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSocietyPopupComponent } from './delete-society-popup.component';

describe('DeleteSocietyPopupComponent', () => {
  let component: DeleteSocietyPopupComponent;
  let fixture: ComponentFixture<DeleteSocietyPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSocietyPopupComponent]
    });
    fixture = TestBed.createComponent(DeleteSocietyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
