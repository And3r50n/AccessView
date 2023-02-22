
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { SubApplication } from 'src/app/core/entities/access/application/SubApplication';
import { AccessService } from '../../access.service';

@Injectable({
  providedIn: 'root'
})
export class AddSubApplicationService {

  private readonly API = 'main/application/sub'

  constructor(private http: HttpClient, private service: AccessService) {

  }

  public getSubApplications(access: Access): any{
    let params = new HttpParams();
    params = params.append('id', access.application.id);
    params = params.append('excepts', this.getSubIdExcepts(access));
    return this.http.get<Observable<SubApplication[]>>(this.API,{params});
  }

  /**
   * Recebe um objeto "Access" e retorna uma string com os IDs sub applications, separados por vírgulas.
   * @param accesses objeto "Access"
   * @return String com os IDs sub applications
   */
  private getSubIdExcepts(access: Access): string  {
    return access.branches.map(branche => branche.application.id).join(',');
  }
}
