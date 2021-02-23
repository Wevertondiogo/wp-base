import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private _tokenStorageService: TokenStorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentCompany = this._tokenStorageService.GetToken;
    if (currentCompany) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentCompany}`,
        },
      });
    }

    return next.handle(request);
  }
}
