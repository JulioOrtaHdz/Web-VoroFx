import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

@Component({
  selector: 'app-renta-variable',
  templateUrl: './renta-variable.component.html',
  styleUrls: ['./renta-variable.component.css'],
})
export class RentaVariableComponent implements OnInit, OnDestroy {

  public lang = localStorage.getItem("ljs-lang");
  tittle: string;
  private toggleLang;

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private langToggleService: LangToggleService) { 
    this.canonicalService.setCanonicalURL();

    this.title.setTitle('Invierte en renta variable | Axin Capital');

    this.toggleLang = langToggleService;

    this.tittle = this.lang != 'es' ?  'Invest in varial income | Axin Capital' : 'Invierte en renta variable | Axin Capital';

    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description',content: 'Invest like an expert, returns over what you are loking for. Invest on variable income and earn up the 33% anual average.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Invest in varial income | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Invest like an expert, returns over what you are loking for. Invest on variable income and earn up the 33% anual average.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Invierte en renta variable | Axin Capital' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Invierte como un experto con rendimientos al nivel que buscas. Gana en promedio el 33% anual en renta variable.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
  }

  ngOnInit(): void {
    
    this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ?  'Invest in varial income | Axin Capital' : 'Invierte en renta variable | Axin Capital';
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
