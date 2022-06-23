import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebook1Component } from './ebook1.component';

describe('Ebook1Component', () => {
  let component: Ebook1Component;
  let fixture: ComponentFixture<Ebook1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebook1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
