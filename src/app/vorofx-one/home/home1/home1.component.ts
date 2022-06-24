import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Correo } from 'src/app/correo.model';
import { VorofxService } from 'src/app/services/vorofx.service';
import { EmailService } from 'src/app/services/email.service';



@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit, OnDestroy {

  isPlay: Boolean = false;
  myVideo: any;
  videoBackground: any;
  coverVid: any;

  constructor(@Inject(DOCUMENT) private document: Document, private emailService: EmailService, private Subscription: VorofxService, private router: Router) {

  }

  public form = {
    email: ''
  };

  public err: any;

  ngOnInit(): void {

    this.myVideo = this.document.querySelector('#my_video_1');
    this.videoBackground = this.document.querySelector('#video_background');
    this.coverVid = this.document.querySelector('#covervid-video');
    var sBrowser, sUsrAg = navigator.userAgent;

    if(sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
        this.myVideo.style.display = 'none';
        this.videoBackground.style.display = 'block';
    }
    else if(sUsrAg.indexOf("Mozilla") > -1) {
      sBrowser = "Mozilla";
      this.myVideo.style.display = 'none';
      this.videoBackground.style.display = 'block';
    }
    else {
        this.myVideo.style.display = 'block';
        this.videoBackground.style.display = 'none';
      setInterval(async () => {
        this.myVideo.play();
        this.playPause();
      }, 1000);
    }
    this.coverVid.coverVid(1280, 720);
  }

  ngOnAfterView(){

  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  plays() {

    if(this.myVideo.play() == undefined) {
      this.myVideo.currenTime = 0;
      // console.log("current");
    }
  }

  playPause() {
    if(!this.isPlay) {
      this.isPlay = true;
      // myVideo.pause();
      this.myVideo.currenTime= 1;
      // console.log("no entro");
    } else {

      this.plays();
    }
  }


  onSubmit() {

    this.Subscription.vorofxSubscription(this.form).subscribe(res => {
      console.log(res);
      console.log(this.form);
     }, err => {
       console.log(err);
       console.log(this.form);
     });

     console.log("Entro");


    let correo1 = new Correo(this.form.email);
    this.emailService.agregarCorreo(correo1);
    this.router.navigate(['/registrarse'], {queryParams: {email: this.form.email}});
  }


}
