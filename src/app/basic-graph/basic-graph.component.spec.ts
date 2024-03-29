import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGraphComponent } from './basic-graph.component';

describe('BasicGraphComponent', () => {
  let component: BasicGraphComponent;
  let fixture: ComponentFixture<BasicGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicGraphComponent]
    });
    fixture = TestBed.createComponent(BasicGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
