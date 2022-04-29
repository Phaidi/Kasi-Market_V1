import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VstatsPage } from './vstats.page';

const routes: Routes = [
  {
    path: '',
    component: VstatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VstatsPageRoutingModule {}
