import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginA2fComponent } from './login-a2f.component';

describe('LoginA2fComponent', () => {
  let component: LoginA2fComponent;
  let fixture: ComponentFixture<LoginA2fComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginA2fComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginA2fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
