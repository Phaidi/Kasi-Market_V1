import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OPreviewPageRoutingModule } from './o-preview-routing.module';

import { OPreviewPage } from './o-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OPreviewPageRoutingModule
  ],
  declarations: [OPreviewPage]
})
export class OPreviewPageModule {}
