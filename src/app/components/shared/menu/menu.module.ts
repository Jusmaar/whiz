import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuComponent],
  declarations: [MenuComponent]
})
export class MenuModule { }
