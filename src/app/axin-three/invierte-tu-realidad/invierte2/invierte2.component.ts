import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-invierte2',
  templateUrl: './invierte2.component.html',
  styleUrls: ['./invierte2.component.css']
})
export class Invierte2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }
}
