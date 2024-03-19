import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFilmsComponent } from './all-films.component';

describe('AllFilmsComponent', () => {
  let component: AllFilmsComponent;
  let fixture: ComponentFixture<AllFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllFilmsComponent]
    });
    fixture = TestBed.createComponent(AllFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
