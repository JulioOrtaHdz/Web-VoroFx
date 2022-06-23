import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsFourComponent } from './us-four.component';

describe('UsFourComponent', () => {
  let component: UsFourComponent;
  let fixture: ComponentFixture<UsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
