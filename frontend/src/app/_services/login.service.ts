import { environment } from '../../environments/environment';
import { Login } from '../_models/login.model';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': 'http://localhost:4200',
    }),
  };
  constructor(private http: HttpClient) {}

  public Auth(login: Login): Observable<Login> {
    const authUrl = environment.urlApi + 'auth';
    const json = JSON.stringify(login);
    return this.http
      .post<Login>(authUrl, json, this.httpOptions)
      .pipe(retry(2) /* catchError(this.HandleError  )*/);
  }

  private HandleError(exception: HttpErrorResponse) {
    let errorMessage;

    if (exception.error instanceof ErrorEvent)
      errorMessage = exception.error.message;
    else
      errorMessage =
        `Código do erro: ${exception.status}, ` +
        `menssagem: ${exception.message}`;

    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
