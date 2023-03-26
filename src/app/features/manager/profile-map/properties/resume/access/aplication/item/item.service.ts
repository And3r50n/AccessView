import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProperties, ItemRequest } from 'src/app/core/entities/access/Item';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesItemService {
  
  private readonly API = 'api/manager/profile/application/item/'


  constructor(private http: HttpClient){}


  public getItemProperties(id: number): any{
    let params = new HttpParams();
    return this.http.get<Observable<ItemProperties>>(`${this.API}${id}`,{params}).pipe(
      catchError(error => {
        console.error('Erro ao fazer solicitação: ', error);
        return of(null);
      })
    );
  }


  public save(record: ItemProperties){
    return this.update(record);
  }


  private create(record: ItemProperties){
    return this.http.post<ItemProperties>(this.API, record);
  }


  private update(item: ItemProperties){
    let record = this.builderItemRequest(item);
    return this.http.put<ItemProperties>(this.API, record);
  }


  private builderItemRequest(item: ItemProperties){

    const roles = item.roles.map(role => ({ 
      id: role.id,
      code: role.code,
      status: role.status
    }));
    
    let record: ItemRequest = {
      id: item.id,
      status: item.status,
      roles
    }
    return record
  }



}
