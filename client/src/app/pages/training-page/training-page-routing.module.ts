import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingComponent} from './training/training.component';


const routes: Routes = [
  {path: '', component: TrainingComponent, data: {title: 'КАТАЛОГ ТРЕНИНГОВ'}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingPageRoutingModule {
}
