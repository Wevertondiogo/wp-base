import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  errorMessage: string = '';
  isLoading!: boolean;
  constructor(private fb: FormBuilder, private _service: LoginService) {}

  ngOnInit(): void {
    this.CreateFormLogin();
    // setInterval(() => console.log(this.errorMessage.length > 0), 2000);
  }
  onSubmit(): void {
    const login = this.login.value;
    this.isLoading = true;
    this._service.Auth(login).subscribe(
      (result) => {
        this.isLoading = false;
        console.log(result);
      },
      (exception) => {
        this.login.get('email')?.setErrors({ fieldsInvalid: true });
        this.login.get('password')?.setErrors({ fieldsInvalid: true });
        this.isLoading = false;
        this.errorMessage = exception.error.message;
      }
    );
  }
  private CreateFormLogin() {
    this.login = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  get emailErrorMessageValidation(): boolean {
    const controller = this.login.get('email');
    return (
      controller?.invalid &&
      (controller.dirty || controller.touched) &&
      controller.errors?.fieldsInvalid
    );
  }
  get passwordErrorMessageValidation(): boolean {
    const controller = this.login.get('password');
    return (
      controller?.invalid &&
      (controller.dirty || controller.touched) &&
      controller.errors?.fieldsInvalid
    );
  }
  get requiredEmail(): boolean {
    const controller = this.login.get('email');
    return controller?.invalid && controller?.errors?.required;
  }

  get invalidEmail(): boolean {
    const controller = this.login.get('email');
    return (
      controller?.invalid &&
      (controller.dirty || controller.touched) &&
      controller?.errors?.email
    );
  }
  get requiredPassword(): boolean {
    const controller = this.login.get('password');
    return controller?.invalid && controller?.errors?.required;
  }
  get errorMinLength(): boolean {
    const controller = this.login.get('password');
    return controller?.invalid && controller?.errors?.minlength;
  }
}
