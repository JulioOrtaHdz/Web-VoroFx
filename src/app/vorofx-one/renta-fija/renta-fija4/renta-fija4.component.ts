import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta-fija4',
  templateUrl: './renta-fija4.component.html',
  styleUrls: ['./renta-fija4.component.css']
})
export class RentaFija4Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
