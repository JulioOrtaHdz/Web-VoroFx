import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvierteFooterComponent } from './invierte-footer.component';

describe('InvierteFooterComponent', () => {
  let component: InvierteFooterComponent;
  let fixture: ComponentFixture<InvierteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvierteFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvierteFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
