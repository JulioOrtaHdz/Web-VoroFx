import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Download1Component } from './download1.component';

describe('Download1Component', () => {
  let component: Download1Component;
  let fixture: ComponentFixture<Download1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Download1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Download1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
