import { SelectionModel } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Access } from 'src/app/core/entities/access/Access';
import { Item } from 'src/app/core/entities/access/Item';
import { AddSubApplicationService } from './add-item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  public itens: Item[] = [];
  public dataSource = new MatTableDataSource(this.itens);
  public displayedColumns: string[] = ['select','name','environment'];
  private checking = new SelectionModel<any>(true,[]);
  public checked = new SelectionModel<any>(true,[]);

  constructor(@Inject(MAT_DIALOG_DATA) private data: Access, private service: AddSubApplicationService) {
    
  }

  ngOnInit(): void {
    this.service.getItens(this.data).subscribe((application: Item[]) => {
      this.dataSource = new MatTableDataSource(application);
    }); 
  }


  putToggled(item: Item){
    this.checking.toggle(item);
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
