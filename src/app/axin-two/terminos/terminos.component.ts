import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from 'src/app/services/canonical.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos_nuevos.component.html',
  styleUrls: ['./terminos.component.css'],
})
export class TerminosComponent implements OnInit, OnDestroy {

  constructor(private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService) { 
    this.canonicalService.setCanonicalURL();

    this.title.setTitle('Términos y condiciones | Axin Capital');

    this.metaTagService.updateTag({ name: 'description',content: 'Conoce los términos y condiciones de uso del sitio, de acuerdo con las leyes de protección de datos vigentes.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Términos y condiciones | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "https://axincapital.com/assets/img/screenshot.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Conoce los términos y condiciones de uso del sitio, de acuerdo con las leyes de protección de datos vigentes.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Términos y condiciones | Axin Capital' });
    this.metaTagService.updateTag({ name:"twitter:description", content: 'Conoce los términos y condiciones de uso del sitio, de acuerdo con las leyes de protección de datos vigentes.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "https://axincapital.com/assets/img/screenshot.png" });
  }

  ngOnInit(): void {
    
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {
   
    
  }

}
