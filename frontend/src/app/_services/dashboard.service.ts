import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private backUrlSubject;
  public backUrl: Observable<boolean>;
  constructor() {
    this.backUrlSubject = new BehaviorSubject<boolean>(false);
    this.backUrl = this.backUrlSubject.asObservable();
  }

  public setBackUrl(backUrl: boolean) {
    this.backUrlSubject.next(backUrl);
  }
}
