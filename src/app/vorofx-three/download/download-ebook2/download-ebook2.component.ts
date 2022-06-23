import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-ebook2',
  templateUrl: './download-ebook2.component.html',
  styleUrls: ['./download-ebook2.component.css']
})
export class DownloadEbook2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
