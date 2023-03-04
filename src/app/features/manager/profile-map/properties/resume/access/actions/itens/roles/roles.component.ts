import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BranchRole } from 'src/app/core/entities/access/application/BranchRole';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public branches: BranchRole[] = [];
  public displayedColumns = ['item', 'updated', 'status'];


  constructor(@Inject(MAT_DIALOG_DATA) private data: BranchRole[]) {
    this.branches = data;
  }

  ngOnInit(): void {
  }

}
