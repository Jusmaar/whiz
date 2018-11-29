import { NgModule } from '@angular/core';

import { FixedComponent } from './fixed.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FixedComponent],
  declarations: [FixedComponent]
})
export class FixedModule { }
