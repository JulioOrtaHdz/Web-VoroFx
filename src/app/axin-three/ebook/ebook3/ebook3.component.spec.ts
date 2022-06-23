import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebook3Component } from './ebook3.component';

describe('Ebook3Component', () => {
  let component: Ebook3Component;
  let fixture: ComponentFixture<Ebook3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebook3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebook3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
