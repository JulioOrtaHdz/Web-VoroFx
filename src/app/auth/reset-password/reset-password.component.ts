import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { VorofxService } from 'src/app/services/vorofx.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers : [Title]
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  public load = false;
  resetForm: any;

  public error = null;

  private buildForm(): void {

    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
    });

  }

  constructor(
    private formBuilder: FormBuilder,
    private Axin: VorofxService,
    private router: Router,
    private title: Title
    ) {
      this.title.setTitle('Axin | Dashboard');
    }

  ngOnInit(): void {
    this.load = false;
    this.buildForm();
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  onSubmit() {
    this.load = true;
    this.Axin.sendPasswordResetLink(this.resetForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(res: any) {
    this.router.navigateByUrl('/recuperacion_de_contraseña');
    this.resetForm.value.email = null;

  }

  handleError(error: any) {
    this.load = false;
    this.error = error.error.error;
  }

}
