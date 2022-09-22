import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnedayPageRoutingModule } from './oneday-routing.module';

import { OnedayPage } from './oneday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnedayPageRoutingModule
  ],
  declarations: [OnedayPage]
})
export class OnedayPageModule {}
