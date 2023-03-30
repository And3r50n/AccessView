import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonProfilesComponent } from './common-profiles/common-profiles.component';
import { RequiredApprovalsComponent } from './required-approvals/required-approvals.component';
import { OverviewComponent } from './overview.component';



@NgModule({
  declarations: [
    OverviewComponent,
    CommonProfilesComponent,
    RequiredApprovalsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OverviewModule { }
