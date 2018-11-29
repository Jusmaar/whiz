import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';


export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: './components/home/home.module#HomeModule'
      },
      {
        path: 'services',
        loadChildren: './components/services/services.module#ServicesModule'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];
