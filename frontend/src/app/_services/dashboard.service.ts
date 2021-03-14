import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Company } from './../_models/company.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private backUrlSubject;
  public backUrl: Observable<boolean>;
  constructor(private http: HttpClient) {
    this.backUrlSubject = new BehaviorSubject<boolean>(false);
    this.backUrl = this.backUrlSubject.asObservable();
  }

  public setBackUrl(backUrl: boolean) {
    this.backUrlSubject.next(backUrl);
  }
  public getCompany(): Observable<Company[]> {
    const url = environment.apiUrl + 'api/company';
    return this.http.get<Company[]>(url);
  }
}
