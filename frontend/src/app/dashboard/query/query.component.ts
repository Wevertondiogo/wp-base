import { DashboardService } from './../../_services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  constructor(private _dashBoardService: DashboardService) {}

  ngOnInit(): void {}

  setBackUrl = () => this._dashBoardService.setBackUrl(true);
}
