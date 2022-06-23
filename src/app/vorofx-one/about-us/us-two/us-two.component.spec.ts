import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsTwoComponent } from './us-two.component';

describe('UsTwoComponent', () => {
  let component: UsTwoComponent;
  let fixture: ComponentFixture<UsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
