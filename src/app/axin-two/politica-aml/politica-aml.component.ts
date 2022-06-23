import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-aml',
  templateUrl: './politica-aml.component.html',
  styleUrls: ['./politica-aml.component.css']
})
export class PoliticaAmlComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
