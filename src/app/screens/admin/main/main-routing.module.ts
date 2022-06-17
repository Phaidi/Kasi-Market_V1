import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
  {
    path: 'advendor',
    loadChildren: () => import('../advendor/advendor.module').then( m => m.AdvendorPageModule)
  },
  {
    path: 'adcustomer',
    loadChildren: () => import('../adcustomer/adcustomer.module').then( m => m.AdcustomerPageModule)
  },
  {
    path: '',
    redirectTo: 'adcustomer',
    pathMatch: 'full'
  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
