import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TrainingsPageRoutingModule} from './trainings-page-routing.module';
import {TrainingsComponent} from './trainings/trainings.component';
import {FilterComponent} from './components/filter/filter.component';
import {TrainingItemComponent} from './components/training-item/training-item.component';


@NgModule({
  declarations: [TrainingsComponent, FilterComponent, TrainingItemComponent],
  imports: [
    CommonModule,
    TrainingsPageRoutingModule
  ]
})
export class TrainingsPageModule {
}
