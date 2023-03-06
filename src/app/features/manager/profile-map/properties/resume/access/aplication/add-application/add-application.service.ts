import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { AccessService } from '../../access.service';


@Injectable({
  providedIn: 'root'
})
export class AddApplicationService {

  private readonly API = '/api/application/all'

  constructor(private http: HttpClient, private service: AccessService) {
  }

  public getApplications(accesses: Access[]): any{
    let params = new HttpParams();
    params = params.append('excepts', this.getAccessID(accesses));
    return this.http.get<Observable<Access[]>>(this.API,{params});
  }

  private getAccessID(accesses: Access[]): string {
    let args = accesses.map(access => access.applicationId);
    return args.join(',');
  }


}
