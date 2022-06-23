import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional2',
  templateUrl: './institucional2.component.html',
  styleUrls: ['./institucional2.component.css']
})
export class Institucional2Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
