import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from 'src/app/core/entities/access/Access';
import { SubApplication } from 'src/app/core/entities/access/application/SubApplication';
import { AddSubApplicationService } from './add-sub-application.service';

@Component({
  selector: 'app-sub-add-application',
  templateUrl: './add-sub-application.component.html',
  styleUrls: ['./add-sub-application.component.scss']
})
export class AddSubApplicationComponent implements OnInit {


  public applications: SubApplication[] = [];
  public dataSource = new MatTableDataSource(this.applications);
  public displayedColumns: string[] = ['select','name', 'domain', 'environment'];
  private checking = new SelectionModel<any>(true,[]);
  public checked = new SelectionModel<any>(true,[]);

  constructor(@Inject(MAT_DIALOG_DATA) private data: Access, private service: AddSubApplicationService) {
    
  }

  ngOnInit(): void {
    this.service.getSubApplications(this.data).subscribe((application: SubApplication[]) => {
      this.dataSource = new MatTableDataSource(application);
    }); 
  }


  putToggled(application: SubApplication){
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
