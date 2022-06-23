import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteTusCryptosComponent } from './invierte-tus-cryptos.component';

describe('InvierteTusCryptosComponent', () => {
  let component: InvierteTusCryptosComponent;
  let fixture: ComponentFixture<InvierteTusCryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteTusCryptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteTusCryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
