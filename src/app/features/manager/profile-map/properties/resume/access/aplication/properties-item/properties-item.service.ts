import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesItemService {
  
  private readonly API = 'api/manager/profile/application/item/'


  constructor(private http: HttpClient){}


  public getItemProperties(id: number): any{
    let path = "properties/";
    let params = new HttpParams();
    return this.http.get<Observable<ItemProperties>>(`${this.API}${path}${id}`,{params}).pipe(
      catchError(error => {
        console.error('Erro ao fazer solicitação: ', error);
        return of(null);
      })
    );
  }


}
