import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OPreviewPage } from './o-preview.page';

const routes: Routes = [
  {
    path: '',
    component: OPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OPreviewPageRoutingModule {}
