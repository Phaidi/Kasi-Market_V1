import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcustomerPage } from './adcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: AdcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcustomerPageRoutingModule {}
