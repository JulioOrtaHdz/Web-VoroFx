import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarSuscripcionComponent } from './cancelar-suscripcion.component';

describe('CancelarSuscripcionComponent', () => {
  let component: CancelarSuscripcionComponent;
  let fixture: ComponentFixture<CancelarSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
