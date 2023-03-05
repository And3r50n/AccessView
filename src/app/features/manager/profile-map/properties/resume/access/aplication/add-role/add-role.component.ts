import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddRoleService } from './add-role.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Role } from 'src/app/core/entities/access/Role';
import { Item } from 'src/app/core/entities/access/Item';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})



export class AddRoleComponent{

  private _roles: Role[] = [];
  private checking = new SelectionModel<Role>(true,[]);
  public checked = new SelectionModel<Role>(true,[]);
  public roles = new MatTableDataSource(this._roles);
  public displayedColumns: string[] = ['select', 'property', 'attribute'];


  
  constructor(@Inject(MAT_DIALOG_DATA) private item: Item, private service: AddRoleService) {
    this.service.getRoles(item).subscribe((roles: Role[]) => {
      this.roles = new MatTableDataSource(roles);
    });
  }

  putToggled(role: Role){
    role.status = 0;
    this.checking.toggle(role);
  }


  done(){
    this.checked = this.checking;
  }

  cancel(){
    this.checking.clear()
    this.checked.clear()
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.roles.filter = filterValue.trim().toLowerCase();
  }

}
