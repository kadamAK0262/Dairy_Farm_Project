import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyformComponent } from './societyform.component';

describe('SocietyformComponent', () => {
  let component: SocietyformComponent;
  let fixture: ComponentFixture<SocietyformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocietyformComponent]
    });
    fixture = TestBed.createComponent(SocietyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
