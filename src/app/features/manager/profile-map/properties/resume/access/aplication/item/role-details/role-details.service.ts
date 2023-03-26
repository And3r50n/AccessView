import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleProperties } from 'src/app/core/entities/access/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleDetailsService {

  private readonly API = 'api/manager/profile/application/item/role/'

  constructor(private http: HttpClient) { }

  public getRoleProperties(code: number): any{
    let path = "properties/";
    return this.http.get<Observable<RoleProperties>>(`${this.API}${path}${code}`);
  }
}
