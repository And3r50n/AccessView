import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovalsComponent } from './approvals/approvals.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { OverviewRoutingModule } from './overview/overview-routing.module';


@NgModule({
  declarations: [
    ApprovalsComponent,
    TeamManagementComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
  ]
})
export class ManagerModule { }
