import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Correo } from 'src/app/correo.model';
import { VorofxService } from 'src/app/services/vorofx.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-renta-variable1',
  templateUrl: './renta-variable1.component.html',
  styleUrls: ['./renta-variable1.component.css']
})
export class RentaVariable1Component implements OnInit, OnDestroy {


  constructor(private emailService: EmailService, private Subscription: VorofxService, private router: Router) {}

  public form = {
    email: ''
  };

  public err: any;

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
    // this.router.navigateByUrl('/registro');
  }

}
