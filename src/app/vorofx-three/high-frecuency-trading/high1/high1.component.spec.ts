import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High1Component } from './high1.component';

describe('High1Component', () => {
  let component: High1Component;
  let fixture: ComponentFixture<High1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
