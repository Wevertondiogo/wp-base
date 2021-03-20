import { Company } from './../_models/company.model';
import { TokenStorageService } from './../_services/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { EmailValidators } from './../Validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  errorMessage: string = '';
  isLoading!: boolean;
  constructor(
    private fb: FormBuilder,
    private _service: AuthService,
    private router: Router,
    private _tokenStorageService: TokenStorageService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.CreateFormLogin();
  }
  onSubmit(): void {
    const login = this.login.value;
    this.isLoading = true;
    this._service.Login(login).subscribe(
      (result): void => {
        this.isLoading = false;
        this._tokenStorageService.SaveToken(result.token);
        this.router.navigate(['dashboard']);
      },
      (exception) => {
        this.login.get('email')?.setErrors({ fieldsInvalid: true });
        this.login.get('password')?.setErrors({ fieldsInvalid: true });
        this.isLoading = false;
        this.errorMessage = exception.error.message;
        console.error(exception.error);
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

  get emailErrorMessageInvalidationServer(): boolean {
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
  get emailRequired(): boolean {
    const controller = this.login.get('email');
    return controller?.invalid && controller?.errors?.required;
  }

  get invalidEmail(): boolean {
    const controller = this.login.get('email');
    return EmailValidators.VerifyEmail(controller);
  }
  get passwordRequired(): boolean {
    const controller = this.login.get('password');
    return controller?.invalid && controller?.errors?.required;
  }
  get errorMinLength(): boolean {
    const controller = this.login.get('password');
    return controller?.invalid && controller?.errors?.minlength;
  }
}
