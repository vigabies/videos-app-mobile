import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnedayPage } from './oneday.page';

const routes: Routes = [
  {
    path: '',
    component: OnedayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnedayPageRoutingModule {}
