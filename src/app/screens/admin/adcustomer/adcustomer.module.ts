import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcustomerPageRoutingModule } from './adcustomer-routing.module';

import { AdcustomerPage } from './adcustomer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcustomerPageRoutingModule
  ],
  declarations: [AdcustomerPage]
})
export class AdcustomerPageModule {}
