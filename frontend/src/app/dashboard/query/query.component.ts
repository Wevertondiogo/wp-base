import { ClientFormComponent } from './../../utils/dialogs/client-form/client-form.component';
import { DashboardService } from './../../_services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  constructor(
    private _dashBoardService: DashboardService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  setBackUrl = () => this._dashBoardService.setBackUrl(true);

  OpenDialog() {
    this.dialog.open(ClientFormComponent);
  }
}
