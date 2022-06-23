import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta-variable5',
  templateUrl: './renta-variable5.component.html',
  styleUrls: ['./renta-variable5.component.css']
})
export class RentaVariable5Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
