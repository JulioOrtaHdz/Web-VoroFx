import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook1',
  templateUrl: './ebook1.component.html',
  styleUrls: ['./ebook1.component.css']
})
export class Ebook1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }
}
