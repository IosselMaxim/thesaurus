import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavComponent} from './core/components/nav/nav.component';


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/development-page/development-page.module').then(m => m.DevelopmentPageModule)
  // }

  {
    path: '', component: NavComponent, children: [
      {
        path: '',
        loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
      },
      {
        path: 'consulting',
        loadChildren: () => import('./pages/consulting-page/consulting-page.module').then(m => m.ConsultingPageModule)
      },
      {
        path: 'company',
        loadChildren: () => import('./pages/company-page/company-page.module').then(m => m.CompanyPageModule)
      },
      {
        path: 'trainings',
        loadChildren: () => import('./pages/trainings-page/trainings-page.module').then(m => m.TrainingsPageModule)
      },
      {
        path: 'trainers',
        loadChildren: () => import('./pages/trainers-page/trainers-page.module').then(m => m.TrainersPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
