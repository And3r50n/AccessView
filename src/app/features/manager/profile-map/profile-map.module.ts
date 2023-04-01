import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMapRoutingModule } from './profile-map-routing.module';
import { ProfileMapComponent } from './profile-map.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProfileMapComponent
  ],
  imports: [
    CommonModule,
    ProfileMapRoutingModule,
    MatTableModule
  ]
})
export class ProfileMapModule { }
