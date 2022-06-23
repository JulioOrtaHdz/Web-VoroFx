import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  styleUrls: ['./institucional.component.css'],
})
export class InstitucionalComponent implements OnInit, OnDestroy {

  public lang = localStorage.getItem("ljs-lang");
  tittle: string;
  private toggleLang;

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private langToggleService: LangToggleService) { 
    this.canonicalService.setCanonicalURL();

    this.toggleLang = this.langToggleService;

    // this.title.setTitle('Portafolio dedicado | Axin Capital');
    
    this.tittle = this.lang != 'es' ?  'Dedicated portfolio | Axin Capital' : 'Portafolio dedicado | Axin Capital';

    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description',content: 'Nuestro portafolio de inversión dedicado es una solución diseñada para optimizar tu negocio con ganacias obtenidas de las cuentas de nuestros inversores.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Portafolio dedicado | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Nuestro portafolio de inversión dedicado es una solución diseñada para optimizar tu negocio con ganacias obtenidas de las cuentas de nuestros inversores.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Portafolio dedicado | Axin Capital' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Nuestro portafolio de inversión dedicado es una solución diseñada para optimizar tu negocio con ganacias obtenidas de las cuentas de nuestros inversores.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
  }

  ngOnInit(): void {
    this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ? 'Dedicated portfolio | Axin Capital' : 'Portafolio dedicado | Axin Capital';
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
    
  }

}
