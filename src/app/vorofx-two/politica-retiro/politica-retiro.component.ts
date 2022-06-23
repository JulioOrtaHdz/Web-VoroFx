import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-retiro',
  templateUrl: './politica-retiro.component.html',
  styleUrls: ['./politica-retiro.component.css']
})
export class PoliticaRetiroComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
