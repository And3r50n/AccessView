
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';
import { PropertiesItemService } from './properties-item.service';
import { RoleDetailsComponent } from './role-details/role-details.component';

@Component({
  selector: 'app-properties-item',
  templateUrl: './properties-item.component.html',
  styleUrls: ['./properties-item.component.scss']
})

export class PropertiesItemComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private id: number,
    private service: PropertiesItemService,
    private dialog: MatDialog){
  }

  ngOnInit(): void {
    this.service.getPropertiesItem(this.id).subscribe((item: ItemProperties) => this.item = item);
  }

  viewRole(role: Role):void{
    const dialog = this.dialog.open(RoleDetailsComponent, {data: role});
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


}
