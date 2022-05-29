import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VttsoldPage } from './vttsold.page';

const routes: Routes = [
  {
    path: '',
    component: VttsoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VttsoldPageRoutingModule {}
