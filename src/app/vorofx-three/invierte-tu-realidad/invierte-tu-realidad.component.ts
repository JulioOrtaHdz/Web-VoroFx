import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-invierte-tu-realidad',
  templateUrl: './invierte-tu-realidad.component.html',
  styleUrls: ['./invierte-tu-realidad.component.css']
})
export class InvierteTuRealidadComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
