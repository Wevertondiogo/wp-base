import { TokenStorageService } from './_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(
    private router: Router,
    private JwtHelper: JwtHelperService,
    private _tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    const token: any = this._tokenStorageService.GetToken;
    if (!this.JwtHelper.isTokenExpired(token)) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
    console.log();
  }
}
