import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainersComponent} from './trainers/trainers.component';


const routes: Routes = [
  {path: '', component: TrainersComponent, data: {title: 'ТРЕНЕРЫ'}},
  {
    path: ':id',
    loadChildren: () => import('../trainer-page/trainer-page.module').then(m => m.TrainerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersPageRoutingModule {
}
