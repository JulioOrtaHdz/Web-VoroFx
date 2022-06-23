import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud-password',
  templateUrl: './solicitud-password.component.html',
  styleUrls: ['./solicitud-password.component.css']
})
export class SolicitudPasswordComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
