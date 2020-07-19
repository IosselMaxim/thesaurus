import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerPageRoutingModule } from './trainer-page-routing.module';
import { TrainerComponent } from './trainer/trainer.component';


@NgModule({
  declarations: [TrainerComponent],
  imports: [
    CommonModule,
    TrainerPageRoutingModule
  ]
})
export class TrainerPageModule { }
