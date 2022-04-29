import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VdashPageRoutingModule } from './vdash-routing.module';

import { VdashPage } from './vdash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VdashPageRoutingModule
  ],
  declarations: [VdashPage]
})
export class VdashPageModule {}
