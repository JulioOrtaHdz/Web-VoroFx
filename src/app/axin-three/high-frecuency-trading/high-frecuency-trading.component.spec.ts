import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighFrecuencyTradingComponent } from './high-frecuency-trading.component';

describe('HighFrecuencyTradingComponent', () => {
  let component: HighFrecuencyTradingComponent;
  let fixture: ComponentFixture<HighFrecuencyTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighFrecuencyTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighFrecuencyTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
