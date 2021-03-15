import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../_models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientFormService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public AddClient(client: Client): Observable<Client> {
    const urlClient = this.baseUrl + 'api/client';
    const companyForeignKey = { companyForeignKey: 6 };
    const tst = Object.assign(client, companyForeignKey);
    console.log(tst);
    return this.http.post<Client>(urlClient, JSON.stringify(tst));
  }
}
