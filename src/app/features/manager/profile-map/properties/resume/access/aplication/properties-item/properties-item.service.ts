import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Role, RoleProperties } from 'src/app/core/entities/access/Role';

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


  public getRoleProperties(id: number): any{
    let path = "role/properties/";
    let params = new HttpParams();
    return this.http.get<Observable<RoleProperties>>(`${this.API}${path}${id}`);
  }


  public getRoles(item:ItemProperties): any{
    let path = "role/";
    let params = new HttpParams();
    params = params.append('itemId', item.id);
    params = params.append('excepts', this.getRoleID(item.roles));
    return this.http.get<Observable<Role[]>>(`${this.API}${params}`);
  }

  private getRoleID(roles: Role[]): string {
    let args = roles.map(role => role.id);
    return args.join(',');
  }




}
