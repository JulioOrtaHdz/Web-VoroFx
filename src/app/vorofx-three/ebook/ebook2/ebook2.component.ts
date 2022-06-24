import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VorofxService } from 'src/app/services/vorofx.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ebook2',
  templateUrl: './ebook2.component.html',
  styleUrls: ['./ebook2.component.css']
})
export class Ebook2Component implements OnInit, OnDestroy {
  ebookForm: any;
  public load = false;

  private buildForm(): void {
    this.ebookForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      terms: ['', [Validators.required]],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private subscription: VorofxService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  @HostListener('unloaded')
  ngOnDestroy(): void {


  }

  onSubmit() {

    this.load = true;
    console.log(this.ebookForm.value);

    this.subscription.ebookSubscription(this.ebookForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    this.load = false;
    this.router.navigateByUrl('/download-ebook/'+this.ebookForm.value.email);
  }


  handleError(error: any) {
    this.load = false;
    console.log(error.error.error)
  }

}
