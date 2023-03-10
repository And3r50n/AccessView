import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

import { ProfileMapRoutingModule } from './profile-map-routing.module';
import { ProfileMapComponent } from './profile-map.component';
import { AccessComponent } from './properties/resume/access/access.component';
import { ActionsComponent } from './properties/resume/access/actions/actions.component';
import { ApprovalsComponent } from './properties/resume/access/actions/approvals/approvals.component';
import { ItensComponent } from './properties/resume/access/actions/itens/itens.component';
import { AddApplicationComponent } from './properties/resume/access/aplication/add-application/add-application.component';
import { AplicationComponent } from './properties/resume/access/aplication/aplication.component';
import { AddRoleComponent } from './properties/resume/access/aplication/add-role/add-role.component';
import { PropertiesComponent } from './properties/properties.component';
import { ResumeComponent } from './properties/resume/resume.component';
import { ApproversComponent } from './properties/resume/access/actions/approvals/approvers/approvers.component';
import { DoneComponent } from './properties/resume/access/actions/done/done.component';
import { ProfileOwnerComponent } from './properties/resume/profile-owner/profile-owner.component';
import { AddItemComponent } from './properties/resume/access/aplication/add-item/add-item.component';
import { RolesComponent } from './properties/resume/access/actions/itens/roles/roles.component';
import { DepartmentComponent } from './properties/resume/department/department.component';
import { MatChipsModule } from '@angular/material/chips';
import { PropertiesItemComponent } from './properties/resume/access/aplication/properties-item/properties-item.component';
import { RoleDetailsComponent } from './properties/resume/access/aplication/properties-item/role-details/role-details.component';


@NgModule({
  declarations: [
    PropertiesComponent,
    ResumeComponent,
    AccessComponent,
    AddApplicationComponent,
    AddRoleComponent,
    ActionsComponent,
    ProfileMapComponent,
    AplicationComponent,
    ApprovalsComponent,
    ItensComponent,
    ApproversComponent,
    DoneComponent,
    ProfileOwnerComponent,
    AddItemComponent,
    RolesComponent,
    DepartmentComponent,
    PropertiesItemComponent,
    RoleDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileMapRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    MatDialogModule,
    ScrollingModule,
    CdkTableModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatStepperModule,
    MatDividerModule,
    MatChipsModule
  ],
  providers: [
    //Colocar aqui os servi??os que precisar utilizar a mesma inst??ncia em toda a aplica????o. * Padr??o sigleton
  ],
  exports: [
    //Colocar os componentes que precisar expor para outros modulos
  ]
})
export class ProfileMapModule { }
