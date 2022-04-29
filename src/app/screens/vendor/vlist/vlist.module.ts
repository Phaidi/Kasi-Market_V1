import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VlistPageRoutingModule } from './vlist-routing.module';

import { VlistPage } from './vlist.page';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VlistPageRoutingModule,
    FoodCardModule
  ],
  declarations: [VlistPage]
})
export class VlistPageModule {}
