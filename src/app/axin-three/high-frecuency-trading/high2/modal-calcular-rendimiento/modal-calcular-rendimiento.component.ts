import { ThrowStmt } from '@angular/compiler';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-calcular-rendimiento',
  templateUrl: './modal-calcular-rendimiento.component.html',
  styleUrls: ['./modal-calcular-rendimiento.component.css']
})
export class ModalCalcularRendimientoComponent implements OnInit, OnDestroy {

  constructor(
    public dialog: MatDialog,
    public menuModalDialog: MatDialogRef<ModalCalcularRendimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  months = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  min = 0;
  max = 12;
  step = 1;
  value = 0;
  thumbLabel = true;
  month = 0;
  amount = 0;
  gain = 0;
  total = 0;

  getMonth(event: any): void {
    this.month = +event.value;
    this.performance(this.amount, this.month);
    console.log('Mes obtenido');
    console.log(this.month);
  }

  getAmount() {
    this.performance(this.amount, this.month);
    console.log('Monto ingresado');
    console.log(this.amount);
  }

  performance(amount: number, month: number) {
    if(this.data.type == 1) { // Inversionista
      let monthlyPercentageInversionista = 0.26 / 12;
      let totalPercentInversionsita = monthlyPercentageInversionista * this.month;
      this.gain = this.amount * totalPercentInversionsita;
      this.total = this.amount + this.gain;

    } else if (this.data.type == 2) { // Mercado
      let monthlyPercentageMercado = 0.33 / 12;
      let totalPercentMercado = monthlyPercentageMercado * this.month;
      this.gain = this.amount * totalPercentMercado;
      this.total = this.amount + this.gain;
    }
  }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }



}
