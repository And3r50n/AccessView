import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from 'src/app/core/entities/access/Access';
import { RootApplication } from 'src/app/core/entities/access/application/RootApplication';
import { AddApplicationService } from './add-application.service';


@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})


export class AddApplicationComponent  {

  public applications: RootApplication[] = [];
  public dataSource = new MatTableDataSource(this.applications);
  public displayedColumns: string[] = ['select','name', 'platform'];
  private checking = new SelectionModel<any>(true,[]);
  public checked = new SelectionModel<any>(true,[]);


  constructor(@Inject(MAT_DIALOG_DATA) private data: Access[], private service: AddApplicationService) {
    this.service.getRootApplications(data).subscribe((application: RootApplication[]) => {
      this.dataSource = new MatTableDataSource(application);
    }); 
  }

  putToggled(application: RootApplication){
    this.checking.toggle(application);
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


