import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingPageRoutingModule } from './training-page-routing.module';
import { TrainingComponent } from './training/training.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    TrainingPageRoutingModule,
    SharedModule
  ]
})
export class TrainingPageModule { }
