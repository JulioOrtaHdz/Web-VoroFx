import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-frecuency-trading',
  templateUrl: './high-frecuency-trading.component.html',
  styleUrls: ['./high-frecuency-trading.component.css']
})
export class HighFrecuencyTradingComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }
}
