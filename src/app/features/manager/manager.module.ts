import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalsComponent } from './approvals/approvals.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { ManagerRoutingModule } from './manager-routing.module';



@NgModule({
  declarations: [
    ApprovalsComponent,
    TeamManagementComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
