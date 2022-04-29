import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VdetailPage } from './vdetail.page';

const routes: Routes = [
  {
    path: '',
    component: VdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VdetailPageRoutingModule {}
