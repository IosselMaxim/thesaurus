import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamesPageRoutingModule} from './games-page-routing.module';
import {GamesComponent} from './games/games.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
    declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesPageRoutingModule,
    SharedModule
  ]
})
export class GamesPageModule {
}
