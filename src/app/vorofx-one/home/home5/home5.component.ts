import { AfterViewInit, Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { Correo } from '../../../correo.model';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { VorofxService } from 'src/app/services/vorofx.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.css']
})
export class Home5Component implements OnInit, OnDestroy, AfterViewInit {

  public form = {
    email: ''
  };

  public err: any;

  imageI: any;
  imageII: any;
  imageIII: any;
  imageIV: any;

  img1 = true;
  img2 = false;
  img3 = false;
  img4 = false;

  imgI(){
    this.img1 = true;
    this.img2 = false;
    this.img3 = false;
    this.img4 = false;

    this.imageI.classList.remove("gray");
    this.imageII[0].classList.add("gray");
    this.imageII[1].classList.add("gray");
    this.imageIII.classList.add("gray");
    this.imageIV.classList.add("gray");
  }
  imgII(){
    this.img1 = false;
    this.img2 = true;
    this.img3 = false;
    this.img4 = false;

    this.imageI.classList.remove("gray");
    this.imageII[0].classList.remove("gray");
    this.imageII[1].classList.remove("gray");
    this.imageIII.classList.add("gray");
    this.imageIV.classList.add("gray");

  }
  imgIII(){
    this.img1 = false;
    this.img2 = false;
    this.img3 = true;
    this.img4 = false;

    this.imageI.classList.remove("gray");
    this.imageII[0].classList.remove("gray");
    this.imageII[1].classList.remove("gray");
    this.imageIII.classList.remove("gray");
    this.imageIV.classList.add("gray");
  }
  imgIV(){
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
    this.img4 = true;

    this.imageI.classList.remove("gray");
    this.imageII[0].classList.remove("gray");
    this.imageII[1].classList.remove("gray");
    this.imageIII.classList.remove("gray");
    this.imageIV.classList.remove("gray");
  }

  constructor(@Inject(DOCUMENT) private document: Document,private emailService: EmailService, private Subscription: VorofxService, private router: Router) { }

  ngAfterViewInit(): void {
    this.imageI = this.document.querySelector('.img1');
    this.imageII = this.document.querySelectorAll('img.img2');
    this.imageIII = this.document.querySelector('.img3');
    this.imageIV = this.document.querySelector('.img4');

    // this.imageI.addEventListener('click', this.imgI.bind(this));
    // this.imageII.addEventListener('click', this.imgII.bind(this));
    // this.imageIII.addEventListener('click', this.imgIII.bind(this));
    // this.imageIV.addEventListener('click', this.imgIV.bind(this));
  }



  correos: Correo[] = [];

  ngOnInit(): void {
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  onSubmit() {

    this.Subscription.vorofxSubscription(this.form).subscribe(res => {
      console.log(res);
      console.log(this.form);
     }, err => {
       console.log(err);
       console.log(this.form);
     });


    let correo1 = new Correo(this.form.email);
    this.emailService.agregarCorreo(correo1);
    this.router.navigate(['/registrarse'], {queryParams: {email: this.form.email}});
  }



}
