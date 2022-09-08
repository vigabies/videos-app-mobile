import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheConjuringPageRoutingModule } from './the-conjuring-routing.module';

import { TheConjuringPage } from './the-conjuring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheConjuringPageRoutingModule
  ],
  declarations: [TheConjuringPage]
})
export class TheConjuringPageModule {}
