import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainerComponent} from './trainer/trainer.component';


const routes: Routes = [
  {path: '', component: TrainerComponent, data: {title: 'ТРЕНЕРЫ'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerPageRoutingModule {
}
