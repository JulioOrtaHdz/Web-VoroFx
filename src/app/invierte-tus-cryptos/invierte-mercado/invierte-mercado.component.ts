import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-invierte-mercado',
  templateUrl: './invierte-mercado.component.html',
  styleUrls: ['./invierte-mercado.component.css']
})
export class InvierteMercadoComponent implements OnInit {

  modalOpen: boolean = false;
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
    this.input = this.document.getElementById("montoMercado");
    this.range = this.document.getElementById("mesesMercado");
    this.monto = this.input.value;
    this.meses = this.range.value;
  }

  toggleModal(e: Event) {
    e.stopImmediatePropagation();
    let node = e.target as HTMLElement;
    if (node.classList.contains("wave") || node.classList.contains("modal_container") || node.classList.contains("close_icon") || node.classList.contains("btn_show")) {
      this.modalOpen = !this.modalOpen;
      setTimeout(() => {
        this.monto = 500;
        this.total = 500;
        this.meses = 0;
        this.valido = true;
      }, 500);
    }
  }

  calculate() {
    this.valido = this.monto >= 500 ? true : false;
    if (this.monto >= 500 && this.meses >= 0 && this.meses <= 12) {
      let aux = Number(this.meses) == 0 ? this.monto : Number(Number(this.monto) * Number(0.0275)) + Number(this.monto);
      for(var i = 2; i <= this.meses; i++){
        aux += Number(Number(aux) * Number(0.0275));
      }
      this.total = Number(aux);
    } else {
      this.total = 0;
    }
  }

}
