import { Component, HostListener, OnDestroy, OnInit, Input } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser'; 
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public lang = localStorage.getItem("ljs-lang");
  tittle: string;

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private toggleLang: LangToggleService) {
    this.canonicalService.setCanonicalURL();

    this.tittle = this.lang != 'es' ? 'Axin Capital: the best way to invest in dolars' : 'Axin Capital: La plataforma de inversión de los innovadores';

    this.title.setTitle(this.tittle);

    

    this.metaTagService.updateTag({ name: 'description',content: 'We have the ideal platform to invest in dollars on Fixed or Variable income.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Axin Capital: the best way to invest in dolars' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'We have the ideal platform to invest in dollars on Fixed or Variable income.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Axin Capital: la mejor manera de invertir en dólares' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Tenemos la plataforma ideal para invertir en dólares con productos de renta fija o renta variable.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
  }

  ngOnInit(): void {
    this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ? 'Axin Capital: the best way to invest in dolars' : 'Axin Capital: la mejor manera de invertir en dólares';
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
