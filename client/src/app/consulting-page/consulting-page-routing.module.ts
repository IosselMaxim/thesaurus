import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ConsultingComponent} from './consulting/consulting.component';


const routes: Routes = [
  {path: '', component: ConsultingComponent, data: {title: 'ОРГАНИЗАЦИОННЫЙ КОНСАЛТИНГ'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultingPageRoutingModule {
}
