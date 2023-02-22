import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { Approvals } from 'src/app/core/entities/Approvals';



@Injectable({
  providedIn: 'root'
})
export class ApprovalsService {

  constructor(private http: HttpClient) { }


  private readonly API = 'main/approvals/teams'


  public getApprovals(accesses: Access[]): any{
    let params = new HttpParams();
    params = params.append('only', this.getSubApplicationsId(accesses));
    return this.http.get<Observable<Approvals[]>>(this.API,{params});
  }

  private getSubApplicationsId(accesses: Access[]): string {
    let args = accesses.map(access => 
      access.branches.map(
        branche => branche.application.id));
    return args.join(',');
  }

}
