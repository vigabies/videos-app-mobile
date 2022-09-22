import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoveRosePageRoutingModule } from './love-rose-routing.module';

import { LoveRosePage } from './love-rose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoveRosePageRoutingModule
  ],
  declarations: [LoveRosePage]
})
export class LoveRosePageModule {}
