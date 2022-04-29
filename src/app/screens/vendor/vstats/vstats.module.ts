import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VstatsPageRoutingModule } from './vstats-routing.module';

import { VstatsPage } from './vstats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VstatsPageRoutingModule
  ],
  declarations: [VstatsPage]
})
export class VstatsPageModule {}
