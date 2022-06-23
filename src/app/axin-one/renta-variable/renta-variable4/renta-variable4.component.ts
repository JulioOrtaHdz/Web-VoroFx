import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-renta-variable4',
  templateUrl: './renta-variable4.component.html',
  styleUrls: ['./renta-variable4.component.css']
})
export class RentaVariable4Component implements OnInit, OnDestroy {

  mostrarimg:number = 1;
  slideImg:any;

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.slideImg = this.document.querySelector('#slideImg');
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

  onSiguiente(): void {
    this.mostrarimg = this.mostrarimg + 1;
    if (this.mostrarimg === 6) {
      this.mostrarimg = 1;
    }

    this.loadImg();
    
  }
  onRegresar(): void {
      this.mostrarimg = this.mostrarimg - 1;
      if (this.mostrarimg === 0) {
        this.mostrarimg = 5; 
      }

      this.loadImg();
  }

  loadImg() {
    if (this.mostrarimg == 1) {
      this.slideImg.setAttribute('src', 'assets/img/punto-diversificacion.png');
    }
    if (this.mostrarimg == 2) {
      this.slideImg.setAttribute('src','assets/img/punto-calidad.png');
    }
    if (this.mostrarimg == 3) {
      this.slideImg.setAttribute('src','assets/img/punto-flexibilidad.png');
    }
    if (this.mostrarimg == 4) {
      this.slideImg.setAttribute('src','assets/img/punto-solvencia.png');
    }
    if (this.mostrarimg == 5) {
      this.slideImg.setAttribute('src','assets/img/punto-valor.png');
    }

  }
}
