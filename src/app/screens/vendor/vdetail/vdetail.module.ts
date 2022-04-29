import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VdetailPageRoutingModule } from './vdetail-routing.module';

import { VdetailPage } from './vdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VdetailPageRoutingModule
  ],
  declarations: [VdetailPage]
})
export class VdetailPageModule {}
