import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then( m => m.CounterModule )
  },
{
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule )
  },
  /*{
    path: 'dragonBall',
    loadChildren: () => import('./dbz/dbz.module').then( m => m.DbzModule )
  }, */
  
  { path: '' ,redirectTo: 'counter', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
