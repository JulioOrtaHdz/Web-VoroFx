import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteTuRealidadComponent } from './invierte-tu-realidad.component';

describe('InvierteTuRealidadComponent', () => {
  let component: InvierteTuRealidadComponent;
  let fixture: ComponentFixture<InvierteTuRealidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteTuRealidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteTuRealidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
