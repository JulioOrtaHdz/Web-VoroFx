import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCalcularRendimientoComponent } from './modal-calcular-rendimiento/modal-calcular-rendimiento.component';
import { ModalConocerMasComponent } from './modal-conocer-mas/modal-conocer-mas.component';

@Component({
  selector: 'app-high2',
  templateUrl: './high2.component.html',
  styleUrls: ['./high2.component.css']
})
export class High2Component implements OnInit, OnDestroy {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }


  modalCalcularRendimiento(type: number): void{
    let dialogRef, width, height, position;
    screen.width < 640 ? width = '100vw' : width = '600px'
    screen.width < 640 ? height = '100vh' : height = ''
    screen.width < 640 ? position = '0' : position = ''

    dialogRef = this.dialog.open(ModalCalcularRendimientoComponent, {
      width: width,
      maxWidth: width,
      height: height,
      maxHeight: '100vh',
      data: {type: type},
      // disableClose: true,  
      position: { 
        bottom: position,
      }
    });
  }

  modalConocerMas() {
    let dialogRef, width, position;
    screen.width < 640 ? width = '100vw' : width = '600px'
    screen.width < 640 ? position = '0' : position = ''

    dialogRef = this.dialog.open(ModalConocerMasComponent, {
      width: width,
      maxWidth: width,
      maxHeight: '100vh',
      data: {},
      // disableClose: true,  
      position: { 
        bottom: position,
      }
    });
  }

}
