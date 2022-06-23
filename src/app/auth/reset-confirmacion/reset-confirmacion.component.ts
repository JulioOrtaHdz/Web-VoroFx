import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-confirmacion',
  templateUrl: './reset-confirmacion.component.html',
  styleUrls: ['./reset-confirmacion.component.css']
})
export class ResetConfirmacionComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
