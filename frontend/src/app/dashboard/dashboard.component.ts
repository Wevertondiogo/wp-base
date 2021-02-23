import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private _tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    console.log(this._tokenStorageService.GetToken);
  }
}
