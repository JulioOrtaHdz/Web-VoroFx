import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ebook2Component } from './ebook2.component';

describe('Ebook2Component', () => {
  let component: Ebook2Component;
  let fixture: ComponentFixture<Ebook2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ebook2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ebook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
