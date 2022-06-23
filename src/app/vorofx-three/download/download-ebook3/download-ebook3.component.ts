import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-ebook3',
  templateUrl: './download-ebook3.component.html',
  styleUrls: ['./download-ebook3.component.css']
})
export class DownloadEbook3Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
