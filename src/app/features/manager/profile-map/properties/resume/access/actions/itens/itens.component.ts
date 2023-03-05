import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Access } from 'src/app/core/entities/access/Access';
import { Role } from 'src/app/core/entities/access/Role';
import { Group } from 'src/app/core/entities/Group';
import { RolesComponent } from './roles/roles.component';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss','../actions.component.scss' ]
})
export class ItensComponent {

  @Input() accesses: Access[] = [];
  public displayedColumns = ['item', 'status'];
  private checking = new SelectionModel<Group[]>(true,[]);

  constructor(public dialog: MatDialog) {

  }


  select(role: Role){

  }


  public showViewRoles(branches: Role[]) {  

    const dialog = this.dialog.open(RolesComponent, {
      width: '600px',
      data:branches
    });
    
    dialog.afterClosed().subscribe(result => {
    });
  }


}
