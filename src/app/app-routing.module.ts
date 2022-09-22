import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'the-conjuring',
    loadChildren: () => import('./the-conjuring/the-conjuring.module').then( m => m.TheConjuringPageModule)
  },  {
    path: 'pinoquio',
    loadChildren: () => import('./pinoquio/pinoquio.module').then( m => m.PinoquioPageModule)
  },
  {
    path: 'encanto',
    loadChildren: () => import('./encanto/encanto.module').then( m => m.EncantoPageModule)
  },
  {
    path: 'orfa',
    loadChildren: () => import('./orfa/orfa.module').then( m => m.OrfaPageModule)
  },
  {
    path: 'oneday',
    loadChildren: () => import('./oneday/oneday.module').then( m => m.OnedayPageModule)
  },
  {
    path: 'love-rose',
    loadChildren: () => import('./love-rose/love-rose.module').then( m => m.LoveRosePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
