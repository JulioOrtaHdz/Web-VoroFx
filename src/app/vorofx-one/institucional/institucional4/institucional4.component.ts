import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional4',
  templateUrl: './institucional4.component.html',
  styleUrls: ['./institucional4.component.css']
})
export class Institucional4Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
