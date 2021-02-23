import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

import { CustomersRoutingModule } from './routes/customers-routing.module';
import { AuthGuard } from './_helpers/auth.guard';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CustomersRoutingModule],
  exports: [RouterModule, LoginModule],
})
export class AppRoutingModule {}
