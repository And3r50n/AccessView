
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';
import { PropertiesItemService } from './properties-item.service';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleDetailsComponent } from './role-details/role-details.component';

@Component({
  selector: 'app-properties-item',
  templateUrl: './properties-item.component.html',
  styleUrls: ['./properties-item.component.scss']
})

export class PropertiesItemComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'status'];
  @ViewChild(MatTable) table!: MatTable<Role>;

  constructor(
    @Inject(MAT_DIALOG_DATA) private id: number,
    private service: PropertiesItemService,
    private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.service.getItemProperties(this.id).subscribe((item: ItemProperties) => this.item = item);
  }

  showRoleProperties(role: Role):void{
    const dialog = this.dialog.open(RoleDetailsComponent, {data: role});
  }

  showAddRole(item: ItemProperties):void{
    const dialog = this.dialog.open(RoleAddComponent, {data: item});
    dialog.afterClosed().subscribe(result => {
      this.setNewRoles(dialog.componentInstance.checking.selected);
      this.table.renderRows();
    });
  }

  public item: ItemProperties = {
    id: 0,
    name: '',
    environment: '',
    application: '',
    created: new Date(),
    updated: new Date(),
    status: 0,
    roles: []
  };


  private setNewRoles(roles: Role[]){
    roles.forEach(role => this.item.roles.push(role));
  }

  public onSubmit(){
    this.service.save(this.item)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }




  onError(): void {
  }

  onSuccess(): void {
  }

  public onCancel(){

  }




}
