import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResource } from 'src/app/core/entities/TeamResource';

@Injectable({
  providedIn: 'root'
})
export class ApproversService {

  private readonly API = 'main/approvals/resources'

  constructor(private http: HttpClient) {
    
  }
  
  public getResourceApprovers(id: number): any{
    let params = new HttpParams();
    params = params.append('ids', id);
    return this.http.get<Observable<TeamResource[]>>(this.API,{params});
  }

}
