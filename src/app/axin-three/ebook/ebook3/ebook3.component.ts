import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook3',
  templateUrl: './ebook3.component.html',
  styleUrls: ['./ebook3.component.css']
})
export class Ebook3Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
