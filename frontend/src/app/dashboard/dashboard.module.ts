import { QueryModule } from './query/query.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    QueryModule,
    MatSidenavModule,
    MatIconModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
