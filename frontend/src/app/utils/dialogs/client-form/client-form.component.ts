import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClientFormService } from 'src/app/_services/client-form.service';
import { EmailValidators } from './../../../Validators/email.validator';
import { CPFValidators } from './../../../Validators/cpf.validator';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  genders = new FormControl('', Validators.required);
  firstStageSignUpClient!: FormGroup;
  secondStageSignUpClient!: FormGroup;
  clientSignUp!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _clientFormService: ClientFormService
  ) {}

  // genders = ['M', 'F'];

  ngOnInit(): void {
    this.firstStageSignUpClient = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      birthDate: ['', Validators.required],
      CPF: [
        '',
        Validators.compose([Validators.required, CPFValidators.verifyCPF]),
      ],
      RG: ['', Validators.required],
      cellNumber: ['', Validators.required],
      phoneNumber: [''],
      job: [''],
      whatsapp: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this.secondStageSignUpClient = this.fb.group({
      address: ['', Validators.required],
      state: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      district: ['', Validators.required],
      city: ['', Validators.required],
      CEP: ['', Validators.required],
      maritalState: ['', Validators.required],
      nationality: ['', Validators.required],
    });
  }
  clientSubmit() {
    const client = Object.assign(
      this.firstStageSignUpClient.value,
      this.secondStageSignUpClient.value
    );

    client.birthDate = this.FormateDate(client);

    this._clientFormService.AddClient(client).subscribe(
      (result) => console.log(result),
      (exception) => console.log(exception)
    );
  }
  AddZero = (number: number) => (number <= 9 ? `0${number}` : number);

  FormateDate(client: any) {
    const formateDate = `${this.AddZero(
      client.birthDate?.getDate()
    )}/${this.AddZero(
      client.birthDate?.getMonth() + 1
    )}/${client.birthDate?.getFullYear().toString()}`;

    return formateDate;
  }

  private AlterFormatterDate(date: string): string {
    if (date.length === 2 || date.length === 5) {
      date += '/';
      console.log(date, 'length', date.length);
    }
    return date;
  }

  private FormatterDate(date: any) {
    const formateDate = `${date?.getDate()} ${date?.getMonth()} ${date?.getFullYear()}`;
    return formateDate?.toString();
  }

  public get nameRequired() {
    const controller = this.firstStageSignUpClient.get('name');
    return controller?.invalid && controller?.errors?.required;
  }
  public get emailRequired() {
    const controller = this.firstStageSignUpClient.get('email');
    return controller?.invalid && controller?.errors?.required;
  }
  public get birthDateRequired() {
    const controller = this.firstStageSignUpClient.get('birthDate');
    return controller?.invalid && controller?.errors?.required;
  }
  public get cpfRequired() {
    const controller = this.firstStageSignUpClient.get('CPF');
    return controller?.invalid && controller?.errors?.required;
  }

  public get cpfValidated() {
    const controller = this.firstStageSignUpClient.get('CPF');
    return controller?.errors?.cpfInvalidated;
  }

  public get rgRequired() {
    const controller = this.firstStageSignUpClient.get('RG');
    return controller?.invalid && controller?.errors?.required;
  }
  public get cellNumberRequired() {
    const controller = this.firstStageSignUpClient.get('cellNumber');
    return controller?.invalid && controller?.errors?.required;
  }
  public get whatsappRequired() {
    const controller = this.firstStageSignUpClient.get('whatsapp');
    return controller?.invalid && controller?.errors?.required;
  }
  public get jobRequired() {
    const controller = this.firstStageSignUpClient.get('job');
    return controller?.invalid && controller?.errors?.required;
  }

  public get genderRequired() {
    const controller = this.firstStageSignUpClient.get('gender');
    return controller?.invalid && controller?.errors?.required;
  }
  // secondStageSignUpClient

  public get addressRequired() {
    const controller = this.secondStageSignUpClient.get('address');
    return controller?.invalid && controller?.errors?.required;
  }
  public get stateRequired() {
    const controller = this.secondStageSignUpClient.get('state');
    return controller?.invalid && controller?.errors?.required;
  }
  public get numberRequired() {
    const controller = this.secondStageSignUpClient.get('number');
    return controller?.invalid && controller?.errors?.required;
  }
  public get districtRequired() {
    const controller = this.secondStageSignUpClient.get('district');
    return controller?.invalid && controller?.errors?.required;
  }
  public get cityRequired() {
    const controller = this.secondStageSignUpClient.get('city');
    return controller?.invalid && controller?.errors?.required;
  }
  public get cepRequired() {
    const controller = this.secondStageSignUpClient.get('CEP');
    return controller?.invalid && controller?.errors?.required;
  }
  public get maritalStateRequired() {
    const controller = this.secondStageSignUpClient.get('maritalState');
    return controller?.invalid && controller?.errors?.required;
  }
  public get nationalityRequired() {
    const controller = this.secondStageSignUpClient.get('nationality');
    return controller?.invalid && controller?.errors?.required;
  }
}
