import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-renta-fija3',
  templateUrl: './renta-fija3.component.html',
  styleUrls: ['./renta-fija3.component.css']
})
export class RentaFija3Component implements OnInit, OnDestroy {

  inversion:number=10000;
  valmin:number = 0;
  valmax:number = 50000;
  valminS:number = 1;
  valmaxS:number = 30;
  valstep:number= 500;
  ahorro:number = 0.04;
  inversionista:number = 0.10;
  mercado:number = 0.12;
  resulahorro:number = 0;
  resulinversionista:number = 0;
  resulmercado:number = 0;
  anio:number = 10;

  graf: any;

  slider:any;
  fill:any;
  slider2:any;
  fill2:any;






  onModificarInversion(event: Event){
    this.inversion = parseInt((<HTMLInputElement>event.target).value);
    this.resulahorro = (this.inversion * this.ahorro) + this.inversion;
    this.resulinversionista = this.inversion * this.inversionista;
    this.resulmercado = this.inversion * this.mercado;

  }
  onAumentar():void{
    this.inversion = this.inversion + this.valstep;
    this.resulahorro = this.inversion * this.ahorro;
    this.resulinversionista = this.inversion * this.inversionista;
    this.resulmercado = this.inversion * this.mercado;



  }

  onDisminuir():void{
    if (this.valmin < this.inversion && this.inversion <= this.valmax) {
      this.inversion = this.inversion - this.valstep;
      this.resulahorro = this.inversion * this.ahorro;
      this.resulinversionista = this.inversion * this.inversionista;
      this.resulmercado = this.inversion * this.mercado;

    }
  }


  changeInversion(event: Event) {
    this.onDisminuir();
    this.onAumentar();
 
    this.resulahorro = (this.resulahorro) + this.inversion;
    this.resulinversionista = (this.resulinversionista) + this.inversion;
    this.resulmercado = (this.resulmercado) + this.inversion;

    if(this.anio === 1){ return }
    
    for (let i = 1; i < this.anio; i++) {
      this.resulahorro = (this.resulahorro * this.ahorro) + this.resulahorro;
  
      this.resulinversionista = (this.resulinversionista * this.inversionista) + this.resulinversionista;
 
      this.resulmercado = (this.resulmercado * this.mercado) + this.resulmercado;
    }

  }

  changeZoom(event: Event) {

    this.onDisminuir();
    this.onAumentar();
    this.anio = parseInt((<HTMLInputElement>event.target).value);
 
      this.resulahorro = (this.resulahorro) + this.inversion;
      this.resulinversionista = (this.resulinversionista) + this.inversion;
      this.resulmercado = (this.resulmercado) + this.inversion;

    if(this.anio === 1){ return }
    
    for (let i = 1; i < this.anio; i++) {
      this.resulahorro = (this.resulahorro * this.ahorro) + this.resulahorro;
  
      this.resulinversionista = (this.resulinversionista * this.inversionista) + this.resulinversionista;
 
      this.resulmercado = (this.resulmercado * this.mercado) + this.resulmercado;
    }

  }


  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
   
    this.slider = this.document.querySelector('#slider');
    this.fill = this.document.querySelector('.bar .fill');
    
    this.slider2 = this.document.querySelector('#slider2');
    this.fill2 = this.document.querySelector('.bar2 .fill2');

    this.graf = this.document.querySelector('#gra1');

    this.setBar();
    this.setBar2();
    this.onDisminuir();
    this.onAumentar();

    this.anio = 10;
 
      this.resulahorro = (this.resulahorro) + this.inversion;
      this.resulinversionista = (this.resulinversionista) + this.inversion;
      this.resulmercado = (this.resulmercado) + this.inversion;

    if(this.anio === 1){ return }
    
    for (let i = 1; i < this.anio; i++) {
      this.resulahorro = (this.resulahorro * this.ahorro) + this.resulahorro;
  
      this.resulinversionista = (this.resulinversionista * this.inversionista) + this.resulinversionista;
 
      this.resulmercado = (this.resulmercado * this.mercado) + this.resulmercado;
    }

  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

  setBar() {
    this.slider = this.document.querySelector('#slider');
    this.fill.style.width = this.slider.value/500 + '%';
  }

  setBar2() {
    this.slider2 = this.document.querySelector('#slider2');

    this.fill2.style.width = this.slider2.value*3.3333 + '%';

    for(let i=1; i<=30; i++) {
      if(this.slider2.value==i) {
        this.graf.setAttribute('src',`assets/img/simulador/grafica${i}.svg`);
      }
    }
    
  }

  ngAfterViewInit() {
    this.slider.addEventListener('input', this.setBar.bind(this));
    this.slider2.addEventListener('input', this.setBar2.bind(this));
  }



}
