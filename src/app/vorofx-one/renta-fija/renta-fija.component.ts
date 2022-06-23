import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

@Component({
  selector: 'app-renta-fija',
  templateUrl: './renta-fija.component.html',
  styleUrls: ['./renta-fija.component.css'],
})
export class RentaFijaComponent implements OnInit, OnDestroy {

  public lang = localStorage.getItem("ljs-lang");
  tittle: string;
  private toggleLang;

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private langToggleService: LangToggleService) {
    this.canonicalService.setCanonicalURL();

    this.toggleLang = langToggleService;

    this.tittle = this.lang != 'es' ?  'Invest in fixed income | Axin Capital' : 'Invierte en renta fija | Axin Capital';

    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description', content: 'Make your money yield more than in any bank. Invest on fixed income and earn up the 12% per year.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Invest in fixed income | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Make your money yield more than in any bank. Invest on fixed income and earn up the 12% per year.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Invierte en renta fija | Axin Capital' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Haz que tu dinero crezca más que en cualquier banco. Invierte en renta fija y gana hasta el 12% anual.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
  }

  ngOnInit(): void {
    this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ? 'Invest in fixed income | Axin Capital' : 'Invierte en renta fija | Axin Capital';
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
