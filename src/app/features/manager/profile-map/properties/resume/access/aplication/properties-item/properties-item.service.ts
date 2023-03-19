import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Role } from 'src/app/core/entities/access/Role';


@Injectable({
  providedIn: 'root'
})
export class PropertiesItemService {
  
  private readonly API = 'api/manager/profile/application/item/'


  constructor(private http: HttpClient){}


  public getItemProperties(id: number): any{
    const path = "properties/";
    let params = new HttpParams();
    return this.http.get<Observable<ItemProperties>>(`${this.API}${path}${id}`,{params}).pipe(
      catchError(error => {
        console.error('Erro ao fazer solicitação: ', error);
        return of(null);
      })
    );
  }

  public addRoles(item:ItemProperties): any{
    const path = "role/add";
    let params = new HttpParams();
    params = params.append('id', item.id);
    params = params.append('roles', this.filterRoles(item.roles));
    return this.http.get<Observable<Role[]>>(`${this.API}${path}`,{params}).pipe(
      catchError(error => {
        console.error('Erro ao fazer solicitação: ', error);
        return of(null);
      })
    );
  
  
  }

  private filterRoles(roles: Role[]): string {
    const ids: number[] = [];
    roles.filter(role => role.status === 0).forEach(role => ids.push(role.id));
    return ids.join(',');
  }



}
