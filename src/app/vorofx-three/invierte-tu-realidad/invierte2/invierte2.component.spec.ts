import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invierte2Component } from './invierte2.component';

describe('Invierte2Component', () => {
  let component: Invierte2Component;
  let fixture: ComponentFixture<Invierte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Invierte2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Invierte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
