import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/core/entities/access/Role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public roles: Role[] = [];
  public displayedColumns = ['item', 'status'];


  constructor(@Inject(MAT_DIALOG_DATA) private data: Role[]) {
    this.roles = data;
  }

  ngOnInit(): void {
  }

}
