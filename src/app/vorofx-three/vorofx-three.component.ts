import { Component, HostListener, OnDestroy, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-vorofx-three',
  templateUrl: './vorofx-three.component.html',
  styleUrls: ['./vorofx-three.component.css']
})
export class AxinThreeComponent implements OnInit, OnDestroy {

  originLang = localStorage.getItem("ljs-lang") || 'es';

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let script = this.renderer.createElement("script");
    script.type = 'text/javascript';
    script.text = 'Localize.setLanguage("es");';
    this.renderer.appendChild(this.document.body, script);
    localStorage.setItem("ljs-lang", this.originLang);
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
