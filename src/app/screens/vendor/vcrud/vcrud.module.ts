import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VcrudPageRoutingModule } from './vcrud-routing.module';

import { VcrudPage } from './vcrud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VcrudPageRoutingModule
  ],
  declarations: [VcrudPage]
})
export class VcrudPageModule {}
