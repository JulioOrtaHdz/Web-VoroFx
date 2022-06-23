import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invierte-tus-cryptos',
  templateUrl: './invierte-tus-cryptos.component.html',
  styleUrls: ['./invierte-tus-cryptos.component.css']
})
export class InvierteTusCryptosComponent implements OnInit {

  originLang = localStorage.getItem("ljs-lang") || 'es';

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private title: Title) {
    this.title.setTitle('Invierte tus Cryptos | Axin Capital');
  }

  ngOnInit(): void {
    let script = this.renderer.createElement("script");
    script.type = 'text/javascript';
    script.text = 'Localize.setLanguage("es");';
    this.renderer.appendChild(this.document.body, script);
    localStorage.setItem("ljs-lang", this.originLang);
  }

}
