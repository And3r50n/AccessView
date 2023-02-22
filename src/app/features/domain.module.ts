import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { DomainRoutingModule } from './domain-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DomainRoutingModule,
    CoreModule
  ]
})
export class DomainModule { }
