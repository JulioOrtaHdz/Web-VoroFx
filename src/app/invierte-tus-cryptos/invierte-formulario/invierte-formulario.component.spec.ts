import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteFormularioComponent } from './invierte-formulario.component';

describe('InvierteFormularioComponent', () => {
  let component: InvierteFormularioComponent;
  let fixture: ComponentFixture<InvierteFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
