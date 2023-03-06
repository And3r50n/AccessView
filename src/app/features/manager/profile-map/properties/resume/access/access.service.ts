import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { Item } from 'src/app/core/entities/access/Item';
import { PropertiesService } from '../../properties.service';


@Injectable({
  providedIn: 'root'
})

export class AccessService {

  private warnings = new Subject<number>();
  private accesses = new Subject<Access[]>();
  private access = new Subject<Access>();
  private item = new Subject<Item>(); 


  constructor(private http: HttpClient, private service: PropertiesService) {

  }

  public _getAccesses$(id: number): void{
    this.service.getProfileMap().subscribe(profile => this.accesses.next(profile.accesses))
  }  

  public setAccesses(accesses: Access[]){
    this.accesses.next(accesses);
  }

  public getAccesses(){
    return this.accesses.asObservable();
  }

  public setAccess(access: Access){
    this.access.next(access);
  }

  public getAccess(){
    return this.access.asObservable();
  }

  public setItem(item: Item){
    this.item.next(item);
  }

  public getItem(){
    return this.item.asObservable();
  }

  public getWarnings(){
    return this.warnings.asObservable();
  }

}
