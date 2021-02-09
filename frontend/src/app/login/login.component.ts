import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.CreateFormLogin();
  }
  onSubmit(): void {
    console.log(this.login.value);
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
