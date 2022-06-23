import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LangToggleService } from 'src/app/services/lang-toggle.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  tittle: string | undefined;
  lang = localStorage.getItem("ljs-lang") || "es";

  constructor(
    private router: Router,
    private title: Title,
    private toggleLang: LangToggleService
  ) {

    this.tittle = this.lang == "es" ? "Registro | Axin Capital" : "Register | AxinCapital";

    this.title.setTitle(this.tittle);
  }

  ngOnInit() {
    this.toggleLang.change.subscribe(idioma => {
      this.tittle = idioma == 'es' ? "Registro | Axin Capital" : "Register | AxinCapital";
      this.title.setTitle(this.tittle);
    });
  }

}
