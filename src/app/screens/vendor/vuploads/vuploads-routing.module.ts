import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VuploadsPage } from './vuploads.page';

const routes: Routes = [
  {
    path: '',
    component: VuploadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VuploadsPageRoutingModule {}
