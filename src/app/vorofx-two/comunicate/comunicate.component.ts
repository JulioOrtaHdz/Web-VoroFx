import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import { VorofxService } from 'src/app/services/vorofx.service';
import { CanonicalService } from 'src/app/services/canonical.service';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

@Component({
  selector: 'app-comunicate',
  templateUrl: './comunicate.component.html',
  styleUrls: ['./comunicate.component.css'],
})
export class ComunicateComponent implements OnInit, OnDestroy {

  types: string[] = [
    'Cuentas de tasa fija',
    'Cuentas de tasa variable',
    'Soporte',
    'Otro',
  ];

  show:boolean = false;
  state:boolean = false;

  public form = {
    type: null,
    full_name: null,
    company: null,
    email: null,
    phone: null,
    msj: null,
  };

  public error: any = [];

  public lang = localStorage.getItem("ljs-lang");
  tittle: string;

  constructor(private Axin: VorofxService, private title: Title, private metaTagService: Meta, private canonicalService: CanonicalService, private toggleLang: LangToggleService) {
    this.canonicalService.setCanonicalURL();

    this.tittle = this.lang != 'es' ? 'Contact us | Axin Capital' : 'Contacto | Axin Capital';

    this.title.setTitle(this.tittle);

    this.metaTagService.updateTag({ name: 'description',content: 'Do you have any doubt or comments? In Axin Capital is always a pleasure to help you.' });
    // this.metaTagService.updateTag({ name: 'keywords', content: 'El mito del emprendedor de Michael Gerber, 5 errores de los emprendedores principiantes y cómo evitarlos'})
    this.metaTagService.updateTag({ property: 'og:title', content: 'Contact us | Axin Capital' });
    this.metaTagService.updateTag({ property: 'og:image', content: "assets/logo-black.png" });
    this.metaTagService.updateTag({ property: 'og:description',content: 'Do you have any doubt or comments? In Axin Capital is always a pleasure to help you.' });
    this.metaTagService.updateTag({ name:"twitter:title", content: 'Contact us | Axin Capital' });
    this.metaTagService.updateTag({ name:"twitter:description", content: '¿Tienes alguna duda o comentario? En Axin Capital siempre es un placer atenderte.' });
    this.metaTagService.updateTag({ name:"twitter:image", content: "assets/logo-black.png" });

  }

  onSubmit() {
    this.show = true;
    this.Axin.contactUs(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    this.show = false;
    this.state = true;
    this.reset();
  }

  handleError(error: any) {
    this.error = error.error.errors;
    this.show = false;
  }

  reset() {
    this.form.type = null;
    this.form.full_name = null;
    this.form.company = null;
    this.form.email = null;
    this.form.phone = null;
    this.form.msj = null;
  }

  ngOnInit(): void {
    this.toggleLang.change.subscribe(idioma=>{
      this.tittle = idioma != 'es' ? 'Contact us | Axin Capital' : 'Contacto | Axin Capital';
      this.title.setTitle(this.tittle);
    });
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

}
