import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersRoutingModule } from './routes/customers-routing.module';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomersRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
