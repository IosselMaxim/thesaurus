import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyComponent} from './company/company.component';


const routes: Routes = [
  {path: '', component: CompanyComponent, data: {title: 'О КОМПАНИИ'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyPageRoutingModule {
}
