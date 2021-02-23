import { Company } from './../_models/company.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  TOKEN_KEY = 'auth-token';
  constructor() {}

  public LogOut(): void {
    localStorage.clear();
  }
  public SaveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  public get GetToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
