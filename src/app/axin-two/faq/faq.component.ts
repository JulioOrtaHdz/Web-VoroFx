import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';
declare var $:any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit, OnDestroy {

  anadir:boolean = true;
  retirar:boolean = false;
  verificacion:boolean = false;
  
  public lang = localStorage.getItem("ljs-lang");
  tittle: string;
  eventLang: any;

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private toggleLang: LangToggleService) {
    this.canonicalService.setCanonicalURL();

    this.title.setTitle('Preguntas frecuentes | Axin Capital');

    this.tittle = this.lang != 'es' ? 'Frequently asked questions | Axin Capital' : 'Preguntas frecuentes | Axin Capital';

    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description',content: 'Here we solve some of the doubts that our investors have about the platform.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Frequently asked questions | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Here we solve some of the doubts that our investors have about the platform.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Frequently asked questions | Axin Capital' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Here we solve some of the doubts that our investors have about the platform.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
  }

  onAnadir() {
    this.anadir = true;
    this.retirar = false;
    this.verificacion = false;
  }
  onRetirar() {
    this.anadir = false;
    this.retirar = true;
    this.verificacion = false;
  }
  onVerificacion() {
    this.anadir = false;
    this.retirar = false;
    this.verificacion = true;
  }

  ngOnInit(): void {
    this.eventLang = this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ? 'Frequently asked questions | Axin Capital' : 'Preguntas frecuentes | Axin Capital';
      this.title.setTitle(this.tittle);
    });
  }

  // @HostListener('unloaded')
  ngOnDestroy(): void {
   this.eventLang.unsubscribe();
    
  }


}
