import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingPageRoutingModule } from './training-page-routing.module';
import { TrainingComponent } from './training/training.component';


@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    TrainingPageRoutingModule
  ]
})
export class TrainingPageModule { }
