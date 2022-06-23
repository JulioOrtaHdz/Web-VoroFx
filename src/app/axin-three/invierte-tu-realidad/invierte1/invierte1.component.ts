import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConocerMasComponent } from '../../high-frecuency-trading/high2/modal-conocer-mas/modal-conocer-mas.component';

@Component({
  selector: 'app-invierte1',
  templateUrl: './invierte1.component.html',
  styleUrls: ['./invierte1.component.css']
})
export class Invierte1Component implements OnInit, OnDestroy {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
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
