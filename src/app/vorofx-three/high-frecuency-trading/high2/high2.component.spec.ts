import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High2Component } from './high2.component';

describe('High2Component', () => {
  let component: High2Component;
  let fixture: ComponentFixture<High2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
