import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';
import { PropertiesItemService } from '../properties-item.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent {

  public roles: Role[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public item: Item, private service: PropertiesItemService){}


  ngOnInit(): void {
    this.service.getRoleProperties(this.item.id).subscribe((roles: Role[]) => this.roles = roles);
  }
}
