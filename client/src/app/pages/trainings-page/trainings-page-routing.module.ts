import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainingsComponent} from './trainings/trainings.component';


const routes: Routes = [
  {path: '', component: TrainingsComponent, data: {title: 'КАТАЛОГ ТРЕНИНГОВ'}},
  {
    path: ':id',
    loadChildren: () => import('../training-page/training-page.module').then(m => m.TrainingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsPageRoutingModule {
}
