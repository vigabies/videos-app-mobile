import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoveRosePage } from './love-rose.page';

const routes: Routes = [
  {
    path: '',
    component: LoveRosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoveRosePageRoutingModule {}
