import { AfterViewInit, Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';

import { LangToggleService } from '../services/lang-toggle.service';

declare function ChangeLangLocalize(lang: any): any;


@Component({
  selector: 'app-vorofx-one',
  templateUrl: './vorofx-one.component.html',
  styleUrls: ['./vorofx-one.component.css']
})
export class AxinOneComponent implements OnInit, OnDestroy, AfterViewInit {
  links: any;
  dropdown: any;
  closeOne: any;
  btn: any;
  nav: any;
  showOne: any;
  navbarTogglerAxinOne: any;
  logoOne: any;
  html: any;
  body: any;
  responsiveMenu: any;

  // selectLang: any;
  selectLangContent: any;
  optionsLang: any;
  public hidden: boolean = false;
  btnEnlaceLang: any;
  langLarge: any;

  public lang = localStorage.getItem("ljs-lang") || "es";
  blank: boolean = true;

  tittle: string;

  @HostListener('unloaded')
  ngOnDestroy(): void {

  }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event: Event) {
    this.scroll(this.document.documentElement.scrollTop);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth >= 992) {
      this.navbarTogglerAxinOne.style.display = 'none';
      this.navbarTogglerAxinOne.classList.remove('show');

      this.showOne.style.display = 'none';
      this.closeOne.style.display = 'none';

    } else {
      this.navbarTogglerAxinOne.style.display = 'none';
      this.navbarTogglerAxinOne.classList.remove('show');

      this.showOne.style.display = 'block';
      this.closeOne.style.display = 'none';
    }
    this.html.style.overflow = 'auto';
    this.html.style.height = 'auto';
    this.body.style.overflow = 'auto';
    this.body.style.height = 'auto';
    this.scroll(this.document.documentElement.scrollTop);
    for (var i = 0; i < this.optionsLang.length; i++) {
      this.optionsLang[i].classList.add("hidden");
    }
  }

  scroll(scrollTop: any) {
    if (scrollTop == 0) {
      this.showOne.setAttribute('src', 'assets/img/icono_menu_blanco.png');
      if (screen.width <= 991) {


        if (this.navbarTogglerAxinOne.classList.contains('show')) {

          this.nav.classList.remove("navTransparent");
          this.nav.classList.add("navWhite");
          this.logoOne.setAttribute('src', 'assets/img/logo-black.png');
          this.showOne.setAttribute('src', 'assets/img/icono_menu_negro.png');
        } else {


          this.btn.classList.remove("black");
          this.btn.classList.add("white");
          this.nav.classList.remove("navWhite");
          this.nav.classList.add("navTransparent");
          this.logoOne.setAttribute('src', 'assets/img/logo-white.png');
          this.showOne.setAttribute('src', 'assets/img/icono_menu_blanco.png');

        }

      } else {


        this.nav.classList.remove("navWhite");
        this.nav.classList.add("navTransparent");

        this.logoOne.setAttribute('src', 'assets/img/logo-white.png');


        this.btn.classList.remove("btnBlack");
        this.btn.classList.add("btnWhite");

        // this.selectLang.classList.add("color-lang");
        for (var i = 0; i < this.links.length; i++) {
          this.links[i].classList.add('white');
          this.links[i].classList.remove('black');
        }
        // this.langLarge.classList.add("white"); //Mis cosas
        this.blank = true;

        this.dropdown.classList.add("white");
        this.dropdown.classList.remove("black");



      }

    } else {
      this.showOne.setAttribute('src', 'assets/img/icono_menu_negro.png');
      if (screen.width <= 991) {

        this.nav.classList.remove("navTransparent");
        this.nav.classList.add("navWhite");

        this.logoOne.setAttribute('src', 'assets/img/logo-black.png');
        this.showOne.setAttribute('src', 'assets/img/icono_menu_negro.png');

      } else {
        this.nav.classList.remove("navTransparent");
        this.nav.classList.add("navWhite");
        this.logoOne.setAttribute('src', 'assets/img/logo-black.png');
        this.btn.classList.remove("btnWhite");
        this.btn.classList.add("btnBlack");

        // this.selectLang.classList.remove("color-lang");
        for (var i = 0; i < this.links.length; i++) {
          this.links[i].classList.add('black');
          this.links[i].classList.remove('white');
        }

        this.dropdown.classList.add("black");
        this.dropdown.classList.remove("white");

        // this.langLarge.classList.remove("white");
        this.blank = false;



      }


    }

    if (this.navbarTogglerAxinOne.classList.contains('show')) {
      this.nav.classList.remove("navTransparent");
      this.nav.classList.add("navWhite");
      this.logoOne.setAttribute('src', 'assets/img/logo-black.png');
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document, private title: Title, private toggleLang: LangToggleService) {
    !this.lang ? this.lang = "es" : false;

    this.tittle = this.lang == 'es' ? 'Axin Capital:  La plataforma de inversión de los innovadores' : 'Axin Capital: the best way to invest in dolars';

    this.toggleLang.toggle(this.lang);

    this.title.setTitle(this.tittle);
  }

  ngOnInit(): void {

  }

  public loadScript() {
    this.links = this.document.querySelectorAll('.links_nav_one');
    this.dropdown = this.document.querySelector('#btnDropMain');
    this.closeOne = this.document.querySelector('#icon-close-vorofx-one');
    this.btn = this.document.querySelector('#btnOne');
    this.nav = this.document.querySelector('#nav');
    this.showOne = this.document.querySelector('#icon-menu-vorofx-one');
    this.navbarTogglerAxinOne = this.document.querySelector('#navbarTogglerAxinOne');
    this.logoOne = this.document.querySelector('.logoOne');
    this.html = this.document.querySelector('html');
    this.body = this.document.querySelector('body');
    this.responsiveMenu = this.document.querySelector('#open-menu-vorofx-one');





    // Traductor
    this.selectLangContent = this.document.querySelectorAll(".lang_content");
    this.optionsLang = this.document.querySelectorAll(".options_lang");
    this.btnEnlaceLang = this.document.getElementById("switch");
    // this.langLarge = this.document.getElementById("lang_contentMain");


    if (!this.navbarTogglerAxinOne.classList.contains('show')) {//se va a cerrar
      this.showOne.style.display = 'block';
      this.closeOne.style.display = 'none';
    } else {
      this.showOne.style.display = 'none';
      this.closeOne.style.display = 'block';
    }

    // for (var i = 0; i < this.btnLang.length; i++) {
    //   this.btnLang[i].innerHTML = `
    //     <span>${this.lang}</span><i class="ml-1 fas fa-chevron-down"></i>
    //   `;
    // }


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


  }

  closeMenu() {
    if (this.navbarTogglerAxinOne.classList.contains('show')) {
      this.navbarTogglerAxinOne.style.display = 'none';
      this.navbarTogglerAxinOne.classList.remove('show');

      this.showOne.style.display = 'block';
      this.closeOne.style.display = 'none';
    } else {

      this.scroll(this.document.documentElement.scrollTop);
    }

  }

  navigation() {
    if (screen.width <= 991) {
      this.closeMenu();
      this.html.style.overflow = 'auto';
      this.html.style.height = 'auto';
      this.body.style.overflow = 'auto';
      this.body.style.height = 'auto';
    } else {
      this.scroll(this.document.documentElement.scrollTop);
    }
  }


  openMenu(event: Event) {
    if (this.navbarTogglerAxinOne.classList.contains('show')) {

      this.navbarTogglerAxinOne.style.display = 'none';
      this.navbarTogglerAxinOne.classList.remove('show');

      this.showOne.style.display = 'block';
      this.closeOne.style.display = 'none';
      this.html.style.overflow = 'auto';
      this.html.style.height = 'auto';
      this.body.style.overflow = 'auto';
      this.body.style.height = 'auto';
      this.scroll(this.document.documentElement.scrollTop);
    } else {
      this.navbarTogglerAxinOne.style.display = 'block';
      this.navbarTogglerAxinOne.classList.add('show');

      this.html.style.overflow = 'hidden';
      this.html.style.height = '100%';
      this.body.style.overflow = 'hidden';
      this.body.style.height = '100%';
      this.showOne.style.display = 'none';
      this.closeOne.style.display = 'block';
      this.nav.classList.remove('navTransparent');
      this.nav.classList.add('navWhite');
      this.logoOne.setAttribute('src', 'assets/img/logo-black.png');
      this.showOne.setAttribute('src', 'assets/img/icono_menu_negro.png');
      console.log("Nav");
    }

  }

  // openLangMenu() {
  //   for (var i = 0; i < this.optionsLang.length; i++) {
  //     this.optionsLang[i].classList.toggle("hidden");
  //   }
  // }

  openLangMenu(e: any, close = false, isEvent = false): void {
    e.classList.toggle("hidden");
    
    if(close){
        e.classList.add("hidden");
    }
  }

  changeLang(event: any) {
    ChangeLangLocalize(event);
    this.toggleLang.toggle(this.lang);
  }

  // changeLang(event: Event) {
  //   const element = event.target as HTMLInputElement;
  //   const value = element.value;
  //   if (element) {
  //     for (var i = 0; i < this.btnLang.length; i++) {
  //       this.btnLang[i].innerHTML = `
  //         <span>${value}</span><i class="ml-1 fas fa-chevron-down"></i>
  //       `;
  //       let aux = this.btnEnlaceLang as HTMLButtonElement;
  //       aux.click();
  //     }
  //   }

  //   for (var i = 0; i < this.optionsLang.length; i++) {
  //     this.optionsLang[i].classList.toggle("hidden");
  //   }

  //   this.lang = localStorage.getItem("ljs-lang");

  //   this.toggleLang.toggle(value || 'es');
  //   console.log(value);

  //   // this.tittle = this.lang == 'es' ? 'Axin Capital: la mejor manera de invertir en dólares' : 'Axin Capital: the best way to invest in dolars';



  //   // this.title.setTitle(this.tittle);
  // }

}
