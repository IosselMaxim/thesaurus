import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavComponent} from './components/nav/nav.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: '', component: NavComponent, children: [
      {
        path: 'contact',
        loadChildren: () => import('./contact-page/contact-page.module').then(m => m.ContactPageModule)
      },
      {
        path: 'consulting',
        loadChildren: () => import('./consulting-page/consulting-page.module').then(m => m.ConsultingPageModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./company-page/company-page.module').then(m => m.CompanyPageModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('./trainings-page/trainings-page.module').then(m => m.TrainingsPageModule)
      },
      {
        path: 'trainers',
        loadChildren: () => import('./trainers-page/trainers-page.module').then(m => m.TrainersPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
