import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsThreeComponent } from './us-three.component';

describe('UsThreeComponent', () => {
  let component: UsThreeComponent;
  let fixture: ComponentFixture<UsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
