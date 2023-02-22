import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddRoleService } from './add-role.service';
import { RoleApplication } from 'src/app/core/entities/access/application/role/RoleApplication';
import { BranchApplication } from 'src/app/core/entities/access/BranchApplication';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})



export class AddRoleComponent{

  private _roles: RoleApplication[] = [];
  private checking = new SelectionModel<RoleApplication>(true,[]);
  public checked = new SelectionModel<RoleApplication>(true,[]);
  public roles = new MatTableDataSource(this._roles);
  public displayedColumns: string[] = ['select', 'property', 'attribute'];

  constructor(@Inject(MAT_DIALOG_DATA) private data: BranchApplication, private service: AddRoleService) {
    this.service.getRoles(data).subscribe((roles: RoleApplication[]) => {
      this.roles = new MatTableDataSource(roles);
    });
  }

  putToggled(role: RoleApplication){
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
