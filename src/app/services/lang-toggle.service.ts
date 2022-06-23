import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangToggleService {

  idioma =  localStorage.getItem("ljs-lang") || 'es';


  @Output() change: EventEmitter<string> = new EventEmitter();

  toggle(idioma: string){
    this.idioma = idioma;
    this.change.emit(this.idioma);
  }

  constructor() { }
}
