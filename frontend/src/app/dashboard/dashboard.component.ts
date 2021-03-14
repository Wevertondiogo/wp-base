import { DashboardService } from './../_services/dashboard.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  onClickInQuery = false;
  isBack!: boolean;
  constructor(private _dashBoardService: DashboardService) {}

  ngOnInit(): void {
    this.setIsBack();
    this._dashBoardService
      .getCompany()
      .subscribe((companies) => console.log(companies));
  }

  OnQuery() {
    this.onClickInQuery = true;
    this._dashBoardService.setBackUrl(false);
  }

  setIsBack() {
    this._dashBoardService.backUrl.subscribe((isBack) => {
      this.isBack = isBack;
    });
  }
}
