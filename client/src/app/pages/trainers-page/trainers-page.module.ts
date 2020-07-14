import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TrainersPageRoutingModule} from './trainers-page-routing.module';
import {TrainersComponent} from './trainers/trainers.component';


@NgModule({
    declarations: [TrainersComponent],
    imports: [
        CommonModule,
        TrainersPageRoutingModule
    ]
})
export class TrainersPageModule {
}
