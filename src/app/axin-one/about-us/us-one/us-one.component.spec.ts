import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsOneComponent } from './us-one.component';

describe('UsOneComponent', () => {
  let component: UsOneComponent;
  let fixture: ComponentFixture<UsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
