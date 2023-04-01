import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles/profiles.component';
import { RequiredApprovalsComponent } from './required-approvals/required-approvals.component';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';


import { MatCardModule } from '@angular/material/card';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    OverviewComponent,
    ProfilesComponent,
    RequiredApprovalsComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class OverviewModule { }
