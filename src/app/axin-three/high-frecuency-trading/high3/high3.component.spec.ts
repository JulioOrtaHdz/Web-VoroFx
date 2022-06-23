import { ComponentFixture, TestBed } from '@angular/core/testing';

import { High3Component } from './high3.component';

describe('High3Component', () => {
  let component: High3Component;
  let fixture: ComponentFixture<High3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
