import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  declarations: [ClientFormComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [ClientFormComponent],
})
export class DialogsModule {}
