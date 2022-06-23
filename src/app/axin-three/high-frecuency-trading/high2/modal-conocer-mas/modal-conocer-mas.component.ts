import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AxinService } from 'src/app/services/vorofx.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-conocer-mas',
  templateUrl: './modal-conocer-mas.component.html',
  styleUrls: ['./modal-conocer-mas.component.css']
})
export class ModalConocerMasComponent implements OnInit, OnDestroy {

  public dialCode = 52;
  public country = 'Mexico (México)';
  public load = false;
  contactForm: any;

  private buildForm(): void { 
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required] ],
      mail: ['', [Validators.required, Validators.email] ],
      country_code: ['52', ],
      country: ['Mexico (México)', ],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+')] ],

    });
  }

  constructor(
    private vorofxService: AxinService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public ModalDialog: MatDialogRef<ModalConocerMasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCountryChange(event: any) {
    this.dialCode = event.dialCode;
    this.country = event.name;
    console.log(event.name);
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
    this.contactForm.value.country_code = this.dialCode;
    this.contactForm.value.country = this.country;

    console.log("Datos enviados: ",this.contactForm.value);
    
    this.vorofxService.invierteTuRealidad(this.contactForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data: any) {
    Swal.fire('Axin Capital', '¡Información enviada!', 'success');
    this.load = false;
    this.ModalDialog.close();

    console.log("Datos recibidos: ",data);
  }


  handleError(error: any) {
    Swal.fire('Axin Capital', '¡No se ha podido enviar la información intentelo de nuevo!', 'error');
    this.load = false;
  }
 

}
