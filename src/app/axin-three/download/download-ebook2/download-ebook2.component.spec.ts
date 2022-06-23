import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEbook2Component } from './download-ebook2.component';

describe('DownloadEbook2Component', () => {
  let component: DownloadEbook2Component;
  let fixture: ComponentFixture<DownloadEbook2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadEbook2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadEbook2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
