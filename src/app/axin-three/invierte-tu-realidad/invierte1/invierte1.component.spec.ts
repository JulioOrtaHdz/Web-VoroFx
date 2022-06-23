import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invierte1Component } from './invierte1.component';

describe('Invierte1Component', () => {
  let component: Invierte1Component;
  let fixture: ComponentFixture<Invierte1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invierte1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invierte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
