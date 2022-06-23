import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional3',
  templateUrl: './institucional3.component.html',
  styleUrls: ['./institucional3.component.css']
})
export class Institucional3Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
