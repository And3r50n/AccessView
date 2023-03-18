import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';
import { RoleAddService } from './role-add.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})


export class RoleAddComponent {

  public roles: Role[] = [];
  public dataSource = new MatTableDataSource(this.roles);
  public displayedColumns: string[] = ['select','name', 'attribute'];
  public checking = new SelectionModel<Role>(true,[]);


  constructor(@Inject(MAT_DIALOG_DATA) public item: ItemProperties, private service: RoleAddService){
  }


  ngOnInit(): void {
    this.service.getRoles(this.item).subscribe((roles: Role[] | undefined) => {
      this.dataSource = new MatTableDataSource(roles);
    })
  }


  putToggled(role: Role){
    this.checking.toggle(role);
  }

  done(){
  }

  cancel(){
    this.checking.clear();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
