import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contacto',
  templateUrl: './create-contacto.component.html',
  styleUrls: ['./create-contacto.component.sass']
})
export class CreateContactoComponent implements OnInit {
  submitted = false;
  isloading = false;
  contactoForm: any;
  constructor(
    private builder: FormBuilder,
    private RouterService: Router
  ) { }

  ngOnInit(): void {
    this.contactoForm = this.builder.group({
      nombre: ['', Validators.required],
      apellido: ['', []],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      activo: ['true', Validators.required],
      telefono: ['', [Validators.required]],
      telefono2: ['', []]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.contactoForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    console.log(this.contactoForm.invalid)
    if (this.contactoForm.invalid) {
      return;
    }
    console.log(this.contactoForm)
    this.isloading = true;
    // display form values on success
  }

  onReset(): void {
    this.submitted = false;
    this.contactoForm.reset();
  }

}
