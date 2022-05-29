import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VttamountPage } from './vttamount.page';

const routes: Routes = [
  {
    path: '',
    component: VttamountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VttamountPageRoutingModule {}
