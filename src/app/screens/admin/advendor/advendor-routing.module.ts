import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvendorPage } from './advendor.page';

const routes: Routes = [
  {
    path: '',
    component: AdvendorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvendorPageRoutingModule {}
