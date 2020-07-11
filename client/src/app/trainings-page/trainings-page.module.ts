import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsPageRoutingModule } from './trainings-page-routing.module';
import { TrainingsComponent } from './trainings/trainings.component';


@NgModule({
  declarations: [TrainingsComponent],
  imports: [
    CommonModule,
    TrainingsPageRoutingModule
  ]
})
export class TrainingsPageModule { }
