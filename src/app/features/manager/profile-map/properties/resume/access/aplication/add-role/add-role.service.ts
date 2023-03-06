import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';


@Injectable({
  providedIn: 'root'
})


export class AddRoleService {

  private readonly API = 'main/role'

  constructor(private http: HttpClient) { }

  public getRoles(id: number, roles: Role[]): any{
    let params = new HttpParams();
    params = params.append('id', id);
    params = params.append('excepts', this.getRolesIdExcepts(roles));
    return this.http.get<Observable<Role[]>>(this.API,{params});
  }

  
  private getRolesIdExcepts(roles: Role[]) {
    let excepts = roles.map(role => role.id).join(',');
    return excepts;
  }


}
