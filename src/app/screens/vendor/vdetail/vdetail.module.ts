import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VdetailPageRoutingModule } from './vdetail-routing.module';

import { VdetailPage } from './vdetail.page';
import { BadgeModule } from 'src/app/components/badge/badge.module';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VdetailPageRoutingModule,
    BadgeModule,
    ButtonModule
  ],
  declarations: [VdetailPage]
})
export class VdetailPageModule {}
