import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-ebook',
  templateUrl: './download-ebook.component.html',
  styleUrls: ['./download-ebook.component.css']
})
export class DownloadEbookComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }
}
