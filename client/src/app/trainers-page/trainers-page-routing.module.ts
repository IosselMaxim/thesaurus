import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainersComponent} from './trainers/trainers.component';


const routes: Routes = [
  {path: '', component: TrainersComponent, data: {title: 'КОНСАЛТИНГ'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersPageRoutingModule {
}
