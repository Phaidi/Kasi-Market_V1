import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VuploadsPageRoutingModule } from './vuploads-routing.module';

import { VuploadsPage } from './vuploads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VuploadsPageRoutingModule
  ],
  declarations: [VuploadsPage]
})
export class VuploadsPageModule {}
