import { NgModule } from '@angular/core';
import { ServicesRoutingModule } from './services.routing';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule,
    RouterModule,
    HeaderModule
  ],
  exports: [],
  declarations: [ServicesComponent],
  providers: [],
})
export class ServicesModule { }
