import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-institucional5',
  templateUrl: './institucional5.component.html',
  styleUrls: ['./institucional5.component.css']
})
export class Institucional5Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
