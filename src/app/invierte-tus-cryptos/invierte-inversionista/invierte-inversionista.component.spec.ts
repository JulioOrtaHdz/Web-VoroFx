import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteInversionistaComponent } from './invierte-inversionista.component';

describe('InvierteInversionistaComponent', () => {
  let component: InvierteInversionistaComponent;
  let fixture: ComponentFixture<InvierteInversionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteInversionistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteInversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
