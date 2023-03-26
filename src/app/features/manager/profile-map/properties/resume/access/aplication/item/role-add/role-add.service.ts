import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleAddService {

  private readonly API = '/api/manager/profile/application/item/role/'


  constructor(private http: HttpClient) { }


  public getRoles(item:ItemProperties): any{
    let params = new HttpParams();
    params = params.append('id', item.id);
    params = params.append('excepts', this.getRoleCode(item.roles));
    return this.http.get<Observable<Role[]>>(this.API,{params});
  }

  private getRoleCode(roles: Role[]): string {
    let args = roles.map(role => role.code);
    return args.join(',');
  }


  
}
