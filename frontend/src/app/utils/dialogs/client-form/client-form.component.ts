import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientFormService } from 'src/app/_services/client-form.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  firstSignUp!: FormGroup;
  secondSignUp!: FormGroup;
  clientSignUp!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _clientFormService: ClientFormService
  ) {}

  genders = ['M', 'F'];

  ngOnInit(): void {
    this.firstSignUp = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      birthDate: ['', Validators.required],
      CPF: ['', Validators.required],
      RG: ['', Validators.required],
      cellNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      job: ['', Validators.required],
      whatsapp: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.secondSignUp = this.fb.group({
      address: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      district: ['', Validators.required],
      city: ['', Validators.required],
      CEP: ['', Validators.required],
      maritalState: ['', Validators.required],
      nationality: ['', Validators.required],
    });
  }
  clientSubmit() {
    const client = Object.assign(
      this.firstSignUp.value,
      this.secondSignUp.value
    );
    this._clientFormService.AddClient(client).subscribe(
      (result) => console.log(result),
      (exception) => console.log(exception)
    );
  }
}
