import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteMercadoComponent } from './invierte-mercado.component';

describe('InvierteMercadoComponent', () => {
  let component: InvierteMercadoComponent;
  let fixture: ComponentFixture<InvierteMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteMercadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
