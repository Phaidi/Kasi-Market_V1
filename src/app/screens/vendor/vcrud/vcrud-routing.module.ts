import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VcrudPage } from './vcrud.page';

const routes: Routes = [
  {
    path: '',
    component: VcrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VcrudPageRoutingModule {}
