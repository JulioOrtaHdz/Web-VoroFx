import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteComoFuncionaComponent } from './invierte-como-funciona.component';

describe('InvierteComoFuncionaComponent', () => {
  let component: InvierteComoFuncionaComponent;
  let fixture: ComponentFixture<InvierteComoFuncionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteComoFuncionaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteComoFuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
