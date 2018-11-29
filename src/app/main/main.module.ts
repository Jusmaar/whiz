import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../components/shared/header/header.module';
import { MenuModule } from '../components/shared/menu/menu.module';
import { FixedModule } from '../components/shared/fixed/fixed.module';
import { FooterModule } from '../components/shared/footer/footer.module';

@NgModule({
  imports: [
    RouterModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    FixedModule
  ],
  exports: [],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule { }
