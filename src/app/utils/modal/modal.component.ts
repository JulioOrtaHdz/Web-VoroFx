import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  father: any;
  hidden = false;

  clickOutSide = false;
  init = true;

  content: any = {};

  constructor() { 

  }


  ngOnInit(): void {
    this.content.closeOnClickOutside = this.content.closeOnClickOutside ? true : false;
  }

  close() {
    this.init = false;
    this.hidden = true;
    setTimeout(() => {
      this.father.destroyModal();
      this.father.closeModal();
    }, 300);
  }

  cancel() {
    this.init = false;
    this.father.cancel();
  }

  info() {
    this.init = false;
    this.father.infoModal();
  }

  closeOutSide() {
    if(!this.content.dialog){
      !this.content.closeOnClickOutside ? this.close() : this.bound();
    }
    if(this.content.dialog){
      this.content.dialog = false;
    }
  }

  accept() {
    this.init = false;
    this.father.acceptModal();
  }

  cancelLeftDialog() {
    this.init = false;
    this.hidden = true;
    setTimeout(() => {
      this.father.destroyModal();
      this.father.cancelLeftModal();
    }, 300);
  }

  acceptLeftDialog() {
    this.init = false;
    this.hidden = true;
    setTimeout(() => {
      this.father.destroyModal();
      this.father.acceptleftModal();
    }, 300);
  }

  bound() {
    this.init = false;
    this.clickOutSide = !this.clickOutSide ? true : false;
    setTimeout(() => { this.clickOutSide = false }, 300);
  }

  convert(data: any) {


    let array: string[] = [];

    if(typeof data === 'object'){
      let aux = data.text;
      for(const property in aux){
        aux[property].forEach((value: any) => array.push(`${value}`));
      }
    }
    data.text = array;
    this.content = data;
  }

}
