import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private _clientFormService: ClientFormService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  // @ViewChild('cpf')
  // cpf!: ElementRef;
  // genders = ['M', 'F'];

  cpf!: String;
  date!: string;
  rg!: string;
  cellNumber!: string;
  phoneNumber!: string;
  whatsapp!: string;

  ngAfterContentChecked(): void {
    this.FormatterPhoneNumber();
    this.CpfFormatterField();
    this.RgFormatter();

    this.ImplementingEntityOfNumbers('whatsapp');
    this.ImplementingEntityOfNumbers('cellNumber');

    this.changeDetectorRef.detectChanges();
  }

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

    client.birthDate = this.DateFormatter(client.birthDate);

    this._clientFormService.AddClient(client).subscribe(
      (result) => console.log(result),
      (exception) => console.log(exception)
    );
  }
  AddZeroInDate = (number: number) => (number <= 9 ? `0${number}` : number);

  DateFormatter(birthDate: any) {
    const DateFormatter = `${this.AddZeroInDate(
      birthDate?.getDate()
    )}/${this.AddZeroInDate(
      birthDate?.getMonth() + 1
    )}/${birthDate?.getFullYear().toString()}`;

    // console.log(DateFormatter);

    return DateFormatter;
  }

  // private DateFormatterField(date: any) {
  //   const DateFormatter = `${date?.getDate()} ${date?.getMonth()} ${date?.getFullYear()}`;
  //   return DateFormatter?.toString();
  // }
  private CpfFormatterField() {
    const cfpLength = this.cpf?.length;
    if (cfpLength === 3 || cfpLength === 7) this.cpf += '.';
    if (cfpLength === 11) this.cpf += '-';
  }

  private DateFormatterField() {
    this.date = this.DateFormatter(this.date);
    // if (this.date?.length === 2 || this.date?.length === 5) {
    //   this.date += '/';
    //   console.log(this.date, 'length', this.date?.length);
    // }

    console.log(this.date);
    // console.log(dateFormatter);
  }

  private RgFormatter() {
    const rgLength = this.rg?.length;
    if (rgLength === 2 || rgLength === 6) this.rg += '.';
  }

  private ImplementingEntityOfNumbers(entity: string) {
    if (entity === 'cellNumber') {
      this.cellNumber = this.CellNumberAndWhatsappFormatter(
        this.cellNumber,
        this.cellNumber?.length
      );
    }
    if (entity === 'whatsapp')
      this.whatsapp = this.CellNumberAndWhatsappFormatter(
        this.whatsapp,
        this.whatsapp?.length
      );
  }

  private CellNumberAndWhatsappFormatter(entity: string, length: number) {
    entity = this.IncludeDDD(entity, length);

    console.log('mjhadsjkfdsj', length === 4);

    if (length === 5 && entity?.indexOf(' ') === 4) entity += '9';

    if (length === 10 && entity?.indexOf('9') === 5) entity += '-';

    return entity;
  }

  private IncludeDDD(item: string, length: number) {
    if (length === 1) item = '(' + item;
    if (length === 3) item += ')';

    return item;
  }

  FormatterPhoneNumber() {
    const value = this.phoneNumber;
    const length = value?.trim().length;
    this.phoneNumber = this.IncludeDDD(value, length);

    if (length === 9) this.phoneNumber += '-';
  }

  public get nameRequired() {
    const controller = this.firstStageSignUpClient.get('name');
    return controller?.invalid && controller?.errors?.required;
  }
  public get emailRequired() {
    const controller = this.firstStageSignUpClient.get('email');
    return controller?.invalid && controller?.errors?.required;
  }
  get invalidEmail(): boolean {
    const controller = this.firstStageSignUpClient.get('email');
    return EmailValidators.VerifyEmail(controller);
  }

  public get birthDateRequired() {
    const controller = this.firstStageSignUpClient.get('birthDate');
    // this.DateFormatterField();
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
    // this.ImplementingEntityOfNumbers('cellNumber');
    return controller?.invalid && controller?.errors?.required;
  }

  public get whatsappRequired() {
    const controller = this.firstStageSignUpClient.get('whatsapp');
    // this.ImplementingEntityOfNumbers('whatsapp');
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
