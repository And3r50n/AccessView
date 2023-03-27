import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Access } from 'src/app/core/entities/access/Access';
import { AddApplicationComponent } from '../aplication/add-application/add-application.component';
import { ActionsComponent } from '../actions/actions.component';
import { AplicationService } from './aplication.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AddItemComponent } from './add-item/add-item.component';
import { Item } from 'src/app/core/entities/access/Item';
import { ItemComponent } from './item/item.component';



@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.scss', '../access.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AplicationComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<Access>;
  public accesses: Access[] = [];
  public displayedColumns = ['more', 'name','status', 'expand'];
  public collapsed: Access | null | undefined;

  constructor(private dialog: MatDialog, private service: AplicationService) {
  }

  ngOnInit() {
    this.service.getAccesses().subscribe(accesses => this.accesses = accesses);
  }

  public setAccess(access: Access){
    this.service.setAccess(access);
    this.access = access;
  }

  public setItem(item: Item){
    this.service.setItem(item);
    this.item = item;
  }

  public addApplication() {  
    const dialog = this.dialog.open(AddApplicationComponent, {data:this.accesses});
    dialog.afterClosed().subscribe(result => {
      this.builderAccesses(dialog.componentInstance.checkeds.selected);
      this.service.setAccesses(this.accesses);
      this.table.renderRows();
    });
  }

  public addItem(access: Access) { 
    const dialog = this.dialog.open(AddItemComponent, {data: access});
    dialog.afterClosed().subscribe(result => {
      let itens = dialog.componentInstance.checked;
      this.pushItens(itens);
    });
  }


  public viewThisItem(item: Item){
    const dialog = this.dialog.open(ItemComponent, {data: item.id});
  }

  public showAllActions() {
    const dialog = this.dialog.open(ActionsComponent, {data:this.accesses});
  }

  public getIcon(): string {
    const count = this.accesses.filter(access => access.id === 0).length;
    return count > 0 ? count <= 9 ? `filter_${count}` : 'filter_9_plus' :'filter_none';
  }


  private pushItens(itens: Item[]){
    this.service.update(this.access.id, itens).subscribe((result: Item[]) => {
      result.forEach(item => this.access.itens.push(item));
    });
  }

  private builderAccesses(access: Access[]){

  }


  public item: Item = {
    id:0,
    code:0,
    name:'',
    environment:'',
    status: 0,
  };

  private access: Access ={
    id: 0,
    code:0,
    name:'',
    itens:[],
    status:0,
  };


}
