import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { QueryComponent } from './query.component';

@NgModule({
  declarations: [QueryComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [QueryComponent],
})
export class QueryModule {}
