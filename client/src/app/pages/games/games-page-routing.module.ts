import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GamesComponent} from './games/games.component';


const routes: Routes = [
  {path: '', component: GamesComponent, data: {title: 'БИЗНЕС ИГРЫ'}},
  {
    path: ':id',
    loadChildren: () => import('../game/game-page.module').then(m => m.GamePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesPageRoutingModule {
}
