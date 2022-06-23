import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEbook3Component } from './download-ebook3.component';

describe('DownloadEbook3Component', () => {
  let component: DownloadEbook3Component;
  let fixture: ComponentFixture<DownloadEbook3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadEbook3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEbook3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
