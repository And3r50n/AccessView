import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMapRoutingModule } from './profile-map-routing.module';
import { ProfileMapComponent } from './profile-map.component';


@NgModule({
  declarations: [
    ProfileMapComponent
  ],
  imports: [
    CommonModule,
    ProfileMapRoutingModule
  ]
})
export class ProfileMapModule { }
