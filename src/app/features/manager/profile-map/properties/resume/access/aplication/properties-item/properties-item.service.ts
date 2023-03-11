import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/core/entities/access/Role';

@Injectable({
  providedIn: 'root'
})
export class PropertiesItemService {
  
  private readonly API = 'main/role' 


  constructor(private http: HttpClient){ 
    
  }

  public getRoles(id: number): any{
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Observable<Role[]>>(this.API,{params});
  }


}
