import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AxinService } from 'src/app/services/vorofx.service';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-activation-token',
  templateUrl: './activation-token.component.html',
  styleUrls: ['./activation-token.component.css'],
  providers : [Title]
})
export class ActivationTokenComponent implements OnInit, OnDestroy {

  public load = false;
  activationForm: any;

  public error = null; 

  private buildForm(): void {
 
    this.activationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
    });
  
  }

  constructor(
    private formBuilder: FormBuilder,
    private Axin: AxinService,
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
    this.Axin.activationToken(this.activationForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(res: any) {
    this.router.navigateByUrl('/verificacion_de_cuenta');
    this.activationForm.value.email = null;
    
  }

  handleError(error: any) {
    this.load = false;
    this.error = error.error.error;
  }

}
