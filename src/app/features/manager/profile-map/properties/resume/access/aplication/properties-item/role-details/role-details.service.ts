import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleProperties } from 'src/app/core/entities/access/Role';

@Injectable({
  providedIn: 'root'
})

export class RoleDetailsService {

  private readonly API = 'api/manager/profile/access/item/role/properties/'


  constructor(private http: HttpClient) {

  }

  public getDetails(id: number): any{
    let params = new HttpParams();
    return this.http.get<Observable<RoleProperties>>(`${this.API}${id}`);
  }


}
