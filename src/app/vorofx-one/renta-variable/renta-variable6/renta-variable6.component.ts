import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Correo } from 'src/app/correo.model';
import { AxinService } from 'src/app/services/vorofx.service';
import { EmailService } from 'src/app/services/email.service';
declare var $:any;

@Component({
  selector: 'app-renta-variable6',
  templateUrl: './renta-variable6.component.html',
  styleUrls: ['./renta-variable6.component.css']
})
export class RentaVariable6Component implements OnInit, OnDestroy {

  constructor(private emailService: EmailService, private Subscription: AxinService, private router: Router) {}

  public form = {
    email: ''
  };

  public err: any;

  ngOnInit(): void {
    $('.carousel').carousel({
      interval: 2000
    });
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
    // this.router.navigateByUrl('/registro');
  }
}
