import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvendorPageRoutingModule } from './advendor-routing.module';

import { AdvendorPage } from './advendor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvendorPageRoutingModule
  ],
  declarations: [AdvendorPage]
})
export class AdvendorPageModule {}
