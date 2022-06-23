import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-land',
  templateUrl: './footer-land.component.html',
  styleUrls: ['./footer-land.component.css']
})
export class FooterLandComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
