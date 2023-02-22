import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Access } from 'src/app/core/entities/access/Access';
import { SubApplication } from 'src/app/core/entities/access/application/SubApplication';
import { RootApplication } from 'src/app/core/entities/access/application/RootApplication';
import { AddApplicationComponent } from '../aplication/add-application/add-application.component';
import { ActionsComponent } from '../actions/actions.component';
import { AplicationService } from './aplication.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BranchApplication } from 'src/app/core/entities/access/BranchApplication';
import { AddSubApplicationComponent } from './add-sub-application/add-sub-application.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleApplication } from 'src/app/core/entities/access/application/role/RoleApplication';
import { BranchRole } from 'src/app/core/entities/access/application/BranchRole';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.scss', '../access.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AplicationComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<Access>;
  public accesses: Access[] = [];
  public displayedColumns = ['more', 'name','platform','status', 'expand'];
  public subApplications: Access | null | undefined;

  constructor(private dialog: MatDialog, private service: AplicationService) {
  }

  ngOnInit() {
    this.service.getAccesses().subscribe(accesses => this.accesses = accesses);
  }

  public setAccess(access: Access){
    this.service.setAccess(access);
    this.access = access;
  }

  public setBranchApplication(branche: BranchApplication){
    this.service.setBranchApplication(branche);
    this.branche = branche;
  }

  public addRootApplication() {  
    const dialog = this.dialog.open(AddApplicationComponent, {data:this.accesses});
    dialog.afterClosed().subscribe(result => {
      this.builderNewAccess(dialog.componentInstance.checked.selected);
      this.service.setAccesses(this.accesses);
      this.table.renderRows();
    });
  }

  public addSubApplication(access: Access) { 
    const dialog = this.dialog.open(AddSubApplicationComponent, {data: access});
    dialog.afterClosed().subscribe(result => {
      this.builderBranchApplications(dialog.componentInstance.checked.selected);
    });
  }

  public addRole(branche: BranchRole) {
    const dialog = this.dialog.open(AddRoleComponent, {data: branche});
    dialog.afterClosed().subscribe(result => {
      this.buildBranches(dialog.componentInstance.checked.selected);
      this.service.setBranchApplication(this.branche);
    });
  }





  public showAllActions() {
    const dialog = this.dialog.open(ActionsComponent, {data:this.accesses});
  }

  public getIcon(): string {
    const count = this.accesses.filter(access => access.id === 0).length;
    return count > 0 ? count <= 9 ? `filter_${count}` : 'filter_9_plus' :'filter_none';
  }




  private buildBranches(roles: RoleApplication[]){
    let branches: BranchRole[] = [];
    roles.forEach(role => {
      let branch: BranchRole ={
        id: 0,
        role: role,
        created: '',
        update: '',
        status: 0
      }
      this.branche.branches.push(branch);
    })
  }

  private builderBranchApplications(applications: SubApplication[]){
    applications.forEach(application =>{
      let branch: BranchApplication ={
        id: 0,
        branches: [],
        application: application,
        created: '',
        updated: '',
        status: 0
      }
      this.access.branches.push(branch);
    })
  }

  private builderNewAccess(applications: RootApplication[]){
    applications.forEach(application =>{
      let access: Access = {
        id: 0,
        application: application,
        branches: [],    
        status: 0,
      }
      this.accesses.push(access);
    })
  }


  public branche: BranchApplication = {
    id: 0,
    branches: [],
    status: 0,
    created: '',
    updated: '',
    application:{
      id: 0,
      name: '',
      rootApplicationId: 0,
      environment:'',
      enabled: false,
      domain:'',
      url:'',
      ip:'',
      created:'',
      updated:'',
    }
  };

  private access: Access ={
    id: 0,
    application:{
      id:0,
      name:'',
      platform:'',
      enabled: false,
      created:'',
      updated:''
    },
    branches:[],
    status:0,
  };



}
