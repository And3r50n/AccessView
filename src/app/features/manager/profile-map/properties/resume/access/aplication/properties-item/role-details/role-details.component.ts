import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role, RoleProperties } from 'src/app/core/entities/access/Role';
import { RoleDetailsService } from './role-details.service';


@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent  implements OnInit {

  displayedColumns: string[] = ['fields', 'values'];
  
  properties: RoleProperties = {
    id: 0,
    name: '',
    attribute: '',
    created: new Date(),
    updated: new Date(),
    status: 0
  };

  constructor(@Inject(MAT_DIALOG_DATA) public role: Role, private service: RoleDetailsService){}


  ngOnInit(): void {
    this.service.getRoleProperties(this.role.id).subscribe((properties: RoleProperties) => this.properties = properties);
  }

}
