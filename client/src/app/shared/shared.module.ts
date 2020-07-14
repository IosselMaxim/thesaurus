import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from '../core/components/title/title.component';



@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule
  ],
  exports: [TitleComponent]
})
export class SharedModule { }
