import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { DomainRoutingModule } from './domain-routing.module';
import { ProfileMapComponent } from './profile-map/profile-map.component';

@NgModule({
  declarations: [
  
    ProfileMapComponent
  ],
  imports: [
    CommonModule,
    DomainRoutingModule,
    CoreModule
  ]
})
export class DomainModule { }
