import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxinThreeComponent } from './vorofx-three.component';

describe('AxinThreeComponent', () => {
  let component: AxinThreeComponent;
  let fixture: ComponentFixture<AxinThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxinThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AxinThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
