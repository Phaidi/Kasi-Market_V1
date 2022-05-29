import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VttamountPageRoutingModule } from './vttamount-routing.module';

import { VttamountPage } from './vttamount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VttamountPageRoutingModule
  ],
  declarations: [VttamountPage]
})
export class VttamountPageModule {}
