import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VlistPage } from './vlist.page';

const routes: Routes = [
  {
    path: '',
    component: VlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VlistPageRoutingModule {}
