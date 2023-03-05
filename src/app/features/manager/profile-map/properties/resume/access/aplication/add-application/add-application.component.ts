import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from 'src/app/core/entities/access/Access';
import { AddApplicationService } from './add-application.service';


@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})


export class AddApplicationComponent  {

  public accesses: Access[] = [];
  public dataSource = new MatTableDataSource(this.accesses);
  public displayedColumns: string[] = ['select','name', 'platform'];
  private checking = new SelectionModel<any>(true,[]);
  public checked = new SelectionModel<any>(true,[]);


  constructor(@Inject(MAT_DIALOG_DATA) private data: Access[], private service: AddApplicationService) {
    this.service.getRootApplications(data).subscribe((application: Access[]) => {
      this.dataSource = new MatTableDataSource(application);
    }); 
  }

  putToggled(access: Access){
    this.checking.toggle(access);
  }

  done(){
    this.checked = this.checking;
  }

  cancel(){
    this.checking.clear();
    this.checked.clear();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }




}


