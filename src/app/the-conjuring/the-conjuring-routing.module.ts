import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheConjuringPage } from './the-conjuring.page';

const routes: Routes = [
  {
    path: '',
    component: TheConjuringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheConjuringPageRoutingModule {}
