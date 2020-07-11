import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyPageRoutingModule } from './company-page-routing.module';
import { CompanyComponent } from './company/company.component';


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyPageRoutingModule
  ]
})
export class CompanyPageModule { }
