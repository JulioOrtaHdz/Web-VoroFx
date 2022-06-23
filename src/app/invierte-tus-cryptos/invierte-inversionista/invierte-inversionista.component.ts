import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-invierte-inversionista',
  templateUrl: './invierte-inversionista.component.html',
  styleUrls: ['./invierte-inversionista.component.css']
})
export class InvierteInversionistaComponent implements OnInit {

  public modalOpen: boolean = false;
  ventana: any;
  botones: any;
  input: any;
  range: any;
  public total: number = 500;
  monto: number = 500;
  meses: number = 0;
  valido: boolean = true;
  ganancia: number = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.input = this.document.getElementById("montoInversionista");
    this.range = this.document.getElementById("mesesInversionista");
    this.monto = this.input.value;
    this.meses = this.range.value;
  }

  toggleModal(e: Event) {
    e.stopImmediatePropagation();
    let node = e.target as HTMLElement;
    if (node.classList.contains("wave") || node.classList.contains("modal_container") || node.classList.contains("close_icon") || node.classList.contains("btn_show")) {
      this.modalOpen = !this.modalOpen;
      setTimeout(()=>{
        this.monto = 500;
        this.total = 500;
        this.meses = 0;
        this.valido=true;
      }, 500);
      
    }
  }

  calculate() {
    this.valido = this.monto >= 500 ? true : false;
    if (this.monto >= 500 && this.meses >= 0 && this.meses <= 12) {
      let porcentajeParcial = 0.26 / 12;
      let porcentajeTotal = porcentajeParcial * this.meses;
      this.ganancia = this.monto * porcentajeTotal;
      this.total = Number(Number(this.monto) + Number(this.ganancia));
    }else{
      this.total = 0;
    }
  }

}
