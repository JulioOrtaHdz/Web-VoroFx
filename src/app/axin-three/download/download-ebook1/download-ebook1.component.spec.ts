import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEbook1Component } from './download-ebook1.component';

describe('DownloadEbook1Component', () => {
  let component: DownloadEbook1Component;
  let fixture: ComponentFixture<DownloadEbook1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadEbook1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEbook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
