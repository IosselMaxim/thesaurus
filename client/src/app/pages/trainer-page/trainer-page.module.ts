import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TrainerPageRoutingModule} from './trainer-page-routing.module';
import {TrainerComponent} from './trainer/trainer.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [TrainerComponent],
  imports: [
    CommonModule,
    TrainerPageRoutingModule,
    SharedModule
  ]
})
export class TrainerPageModule {
}
