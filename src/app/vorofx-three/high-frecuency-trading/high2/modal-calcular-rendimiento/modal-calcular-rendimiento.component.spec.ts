import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCalcularRendimientoComponent } from './modal-calcular-rendimiento.component';

describe('ModalCalcularRendimientoComponent', () => {
  let component: ModalCalcularRendimientoComponent;
  let fixture: ComponentFixture<ModalCalcularRendimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCalcularRendimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCalcularRendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
