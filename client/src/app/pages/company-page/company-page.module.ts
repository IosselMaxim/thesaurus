import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyPageRoutingModule } from './company-page-routing.module';
import { CompanyComponent } from './company/company.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyPageRoutingModule,
    SharedModule
  ]
})
export class CompanyPageModule { }
