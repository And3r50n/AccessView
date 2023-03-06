import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access } from 'src/app/core/entities/access/Access';
import { AccessService } from '../access.service';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private accesses: Access[] = [];

  
  constructor(private http: HttpClient, private service: AccessService){ 
    this.service.getAccesses().subscribe(accesses => this.accesses = accesses);
  }


  public getAccesses(){
    return this.accesses;
  }


  public filterStructuresWithRolesStatus0(data: Access[]){
    /*
    return data.map(access => {
      let newAccess = {...access};
      newAccess.itens = access.itens
        .filter(item => item.roles.some(role => role.status === 0))
        .map(item => {
          let newItem = {...item};
          newItem.roles = item.roles.filter(role => role.status === 0);
          return newItem;
        });
      return newAccess.itens.length > 0 ? newAccess : null;
    }).filter(access => access !== null);
    */
  }

  
}
