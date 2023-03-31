import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles/profiles.component';
import { RequiredApprovalsComponent } from './required-approvals/required-approvals.component';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';


@NgModule({
  declarations: [
    OverviewComponent,
    ProfilesComponent,
    RequiredApprovalsComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
