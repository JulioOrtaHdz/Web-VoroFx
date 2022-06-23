import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConocerMasComponent } from '../high2/modal-conocer-mas/modal-conocer-mas.component';

@Component({
  selector: 'app-high1',
  templateUrl: './high1.component.html',
  styleUrls: ['./high1.component.css']
})
export class High1Component implements OnInit, OnDestroy {

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
