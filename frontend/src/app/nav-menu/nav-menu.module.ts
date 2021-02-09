import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';


import { NavMenuComponent } from './nav-menu.component';

@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [NavMenuComponent],
})
export class NavMenuModule {}
