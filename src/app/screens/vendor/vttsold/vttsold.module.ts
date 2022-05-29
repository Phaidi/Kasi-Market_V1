import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VttsoldPageRoutingModule } from './vttsold-routing.module';

import { VttsoldPage } from './vttsold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VttsoldPageRoutingModule
  ],
  declarations: [VttsoldPage]
})
export class VttsoldPageModule {}
