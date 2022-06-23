import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LangToggleService } from '../services/lang-toggle.service';

declare function ChangeLangLocalize(lang: any): any;

@Component({
  selector: 'app-vorofx-two',
  templateUrl: './vorofx-two.component.html',
  styleUrls: ['./vorofx-two.component.css']
})
export class AxinTwoComponent implements OnInit, OnDestroy {
  links: any;
  closeTwo: any;
  showTwo: any;
  navbarTogglerAxinTwo: any;
  html: any;
  body: any;
  responsiveMenu: any;

  // Traductor
  selectLangContent: any;
  optionsLang: any;
  btnLang: any;
  public hidden: boolean = false;
  btnEnlaceLang: any;
  langLarge: any;

  public lang = localStorage.getItem("ljs-lang") || "es";

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 992) {
      this.navbarTogglerAxinTwo.style.display = 'none';
      this.navbarTogglerAxinTwo.classList.remove('show'); //Mis cosas

      this.showTwo.style.display = 'none';
      this.closeTwo.style.display = 'none';

    } else {
      this.navbarTogglerAxinTwo.style.display = 'none';
      this.navbarTogglerAxinTwo.classList.remove('show'); //Mis cosas

      this.showTwo.style.display = 'block';
      this.closeTwo.style.display = 'none';
    }
    this.html.style.overflow = 'auto';
    this.html.style.height = 'auto';
    this.body.style.overflow = 'auto';
    this.body.style.height = 'auto';


    for (var i = 0; i < this.optionsLang.length; i++) {
      this.optionsLang[i].classList.add("hidden");
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document, private langToggle: LangToggleService) {
    !this.lang ? this.lang = "es" : false;
  }


  ngOnInit(): void {
  }

  loadScript() {
    this.links = this.document.querySelectorAll('.links_nav_two');
    this.closeTwo = this.document.querySelector('#icon-close-vorofx-two');
    this.showTwo = this.document.querySelector('#icon-menu-vorofx-two');
    this.navbarTogglerAxinTwo = this.document.querySelector('#navbarTogglerAxinTwo');
    this.html = this.document.querySelector('html');
    this.body = this.document.querySelector('body');
    this.responsiveMenu = this.document.querySelector('#open-menu-vorofx-two');

    if (!this.navbarTogglerAxinTwo.classList.contains("show")) {//se va a cerrar
      this.showTwo.style.display = 'block';
      this.closeTwo.style.display = 'none';
    } else {
      this.showTwo.style.display = 'none';
      this.closeTwo.style.display = 'block';
    }


    // Traductor
    this.selectLangContent = this.document.querySelectorAll(".lang_content");
    this.btnLang = this.document.querySelectorAll(".lang_change")
    this.optionsLang = this.document.querySelectorAll(".options_lang");
    this.btnEnlaceLang = this.document.getElementById("switch");
    this.langLarge = this.document.getElementById("lang_content");



    this.html.style.overflow = 'auto';
    this.html.style.height = 'auto';
    this.body.style.overflow = 'auto';
    this.body.style.height = 'auto';
  }

  ngAfterViewInit() {
    this.loadScript();
    this.responsiveMenu.addEventListener('click', this.openMenu.bind(this));
    for (var i = 0; i < this.links.length; i++) {
      this.links[i].addEventListener('click', this.navigation.bind(this));
    }

    // for (var i = 0; i < this.btnLang.length; i++) {
    //   this.btnLang[i].innerHTML = `
    //     <span>${this.lang}</span><i class="ml-1 fas fa-chevron-down"></i>
    //   `;
    // }
  }

  closeMenu() {
    if (this.navbarTogglerAxinTwo.classList.contains("show")) { //se va a cerrar
      this.navbarTogglerAxinTwo.style.display = 'none';
      this.navbarTogglerAxinTwo.classList.remove("show");

      this.showTwo.style.display = 'block';
      this.closeTwo.style.display = 'none';
    } else {
      this.showTwo.style.display = 'none';
      this.closeTwo.style.display = 'block';
    }
  }

  navigation() {

    this.closeMenu();
    this.html.style.overflow = 'auto';
    this.html.style.height = 'auto';
    this.body.style.overflow = 'auto';
    this.body.style.height = 'auto';

  }


  openMenu(event: Event) {

    if (this.navbarTogglerAxinTwo.classList.contains("show")) { //se va a cerrar
      // this.navbarTogglerAxinTwo.style.display = 'none';
      this.navbarTogglerAxinTwo.classList.remove("show");

      this.showTwo.style.display = 'block';
      this.closeTwo.style.display = 'none';
      this.html.style.overflow = 'auto';
      this.html.style.height = 'auto';
      this.body.style.overflow = 'auto';
      this.body.style.height = 'auto';
    } else {
      this.html.style.overflow = 'hidden';
      this.html.style.height = '100%';
      this.body.style.overflow = 'hidden';
      this.body.style.height = '100%';
      // this.navbarTogglerAxinTwo.style.display = 'block';
      this.navbarTogglerAxinTwo.classList.add("show");

      this.showTwo.style.display = 'none';
      this.closeTwo.style.display = 'block';

    }

  }


  // openLangMenu() {
  //   for (var i = 0; i < this.optionsLang.length; i++) {
  //     this.optionsLang[i].classList.toggle("hidden");
  //   }
  // }

  // changeLang(event: Event) {
  //   const element = event.target as HTMLInputElement;
  //   const value = element.value;
  //   if (element) {
  //     for (var i = 0; i < this.btnLang.length; i++) {
  //       this.btnLang[i].innerHTML = `
  //         <span>${value}</span><i style="position: relative; top: 2px;" class="ml-1 fas fa-chevron-down"></i>
  //       `;
  //       let aux = this.btnEnlaceLang as HTMLButtonElement;
  //       aux.click();
  //     }
  //   }

  //   for (var i = 0; i < this.optionsLang.length; i++) {
  //     this.optionsLang[i].classList.toggle("hidden");
  //   }

  //   this.lang = localStorage.getItem("ljs-lang");

  //   this.langToggle.toggle(value || 'es');


  // }



  openLangMenu(e: any, close = false): void {
    e.classList.toggle("hidden");
    
    if(close){
      e.classList.add("hidden");
    }
  }

  changeLang(event: any) {
    ChangeLangLocalize(event);
    this.langToggle.toggle(this.lang);
  }

}
