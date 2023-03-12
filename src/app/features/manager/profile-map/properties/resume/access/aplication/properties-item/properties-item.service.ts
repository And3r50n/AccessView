import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProperties } from 'src/app/core/entities/access/Item';


@Injectable({
  providedIn: 'root'
})
export class PropertiesItemService {
  
  private readonly API = 'api/manager/profile/access/item/properties/'


  constructor(private http: HttpClient){ 
    
  }

  public getRoles(id: number): any{
    let params = new HttpParams();
    return this.http.get<Observable<ItemProperties>>(`${this.API}${id}`);
  }

}
