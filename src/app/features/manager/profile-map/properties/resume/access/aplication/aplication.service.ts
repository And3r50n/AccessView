import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access, AccessItemRequest } from 'src/app/core/entities/access/Access';
import { Item } from 'src/app/core/entities/access/Item';
import { AccessService } from '../access.service';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  private readonly API = 'api/manager/profile/application/'

  constructor(private service: AccessService, private http: HttpClient) {
  }

  public setAccess(access: Access){
    this.service.setAccess(access);
  }

  public getAccesses(){
    return this.service.getAccesses();
  }

  public setAccesses(accesses: Access[]){
    return this.service.setAccesses(accesses);
  }

  public setItem(item: Item){
    this.service.setItem(item);
  }

  public update(id: number, itens: Item[]):any{
    let record: AccessItemRequest ={id: id,itens: itens}
    if(record.itens.length > 0){
      return this.http.put<Item[]>(this.API, record);
    }
    return itens;
  }






}

