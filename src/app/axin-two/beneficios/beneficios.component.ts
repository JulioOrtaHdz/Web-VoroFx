import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit, OnDestroy {
  ahorro:boolean = true;
  inversion:boolean = false;
  decide:boolean = false;

  public lang = localStorage.getItem("ljs-lang");
  tittle: string;

  constructor( private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private toggleLang: LangToggleService) { 
    this.canonicalService.setCanonicalURL();

    // this.title.setTitle('Beneficios | Axin Capital');

    this.tittle = this.lang != 'es' ? 'Benefits | Axin Capital' : 'Beneficios | Axin Capital';

    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description',content: 'Learn the benefits of investing in fixed income and discover why Axin Capital is your best alternative, we offer up to 12% per year!' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Benefits' });
    this.metaTagService.updateTag({ property: 'og:image', content: "assets/logo-black.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Learn the benefits of investing in fixed income and discover why Axin Capital is your best alternative, we offer up to 12% per year!' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Conoce los beneficios de invertir en renta fija y descubre por qué Axin Capital es tu mejor alternativa, ¡ofrecemos hasta un 12% anual!' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Conoce los beneficios de invertir en renta fija y descubre por qué Axin Capital es tu mejor alternativa, ¡ofrecemos hasta un 12% anual!' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "assets/logo-black.png" });
 
  }

  onAhorro() {
    this.ahorro = true;
    this.inversion = false;
    this.decide = false;
  }
  onInversion() {
    this.ahorro = false;
    this.inversion = true;
    this.decide = false;
  }
  onDecide() {
    this.ahorro = false;
    this.inversion = false;
    this.decide = true;
  }

  ngOnInit(): void {
    this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ? 'Benefits | Axin Capital' : 'Beneficios | Axin Capital';
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
