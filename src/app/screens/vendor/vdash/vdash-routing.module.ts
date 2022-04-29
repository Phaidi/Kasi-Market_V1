import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VdashPage } from './vdash.page';

const routes: Routes = [
  {
    path: '',
    component: VdashPage,
    children: [
      {
        path: 'vlist',
        loadChildren: () => import('../../vendor/vlist/vlist.module').then( m => m.VlistPageModule)
      },
      {
        path: 'vuploads',
        loadChildren: () => import('../../vendor/vuploads/vuploads.module').then( m => m.VuploadsPageModule)
      },
      {
        path: 'vcrud',
        loadChildren: () => import('../../vendor/vcrud/vcrud.module').then( m => m.VcrudPageModule)
      },
      {
        path: 'vstats',
        loadChildren: () => import('../../vendor/vstats/vstats.module').then( m => m.VstatsPageModule)
      },
      {
        path: '',
        redirectTo: 'vdash/vlist',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VdashPageRoutingModule {}
