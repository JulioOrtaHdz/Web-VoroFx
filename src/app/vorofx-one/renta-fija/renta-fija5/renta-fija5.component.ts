import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta-fija5',
  templateUrl: './renta-fija5.component.html',
  styleUrls: ['./renta-fija5.component.css']
})
export class RentaFija5Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
