import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GamePageRoutingModule} from './game-page-routing.module';
import {GameComponent} from './game/game.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GamePageRoutingModule,
    SharedModule
  ]
})
export class GamePageModule {
}
