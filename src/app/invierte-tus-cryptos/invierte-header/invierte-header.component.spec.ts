import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteHeaderComponent } from './invierte-header.component';

describe('InvierteHeaderComponent', () => {
  let component: InvierteHeaderComponent;
  let fixture: ComponentFixture<InvierteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
