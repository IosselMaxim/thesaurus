import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevelopmentComponent} from './development/development.component';


const routes: Routes = [
  {path: '', component: DevelopmentComponent, data: {title: 'САЙТ В РАЗРАБОТКЕ'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopmentPageRoutingModule { }
