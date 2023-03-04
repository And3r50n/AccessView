import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { RootApplication } from 'src/app/core/entities/access/application/RootApplication';
import { AccessService } from '../../access.service';


@Injectable({
  providedIn: 'root'
})
export class AddApplicationService {

  private readonly API = '/main/application/root'

  constructor(private http: HttpClient, private service: AccessService) {
  }

  public getRootApplications(accesses: Access[]): any{
    let params = new HttpParams();
    params = params.append('excepts', this.getRootIdExcepts(accesses));
    return this.http.get<Observable<RootApplication[]>>(this.API,{params});
  }

  /**
   * Recebe um array de objetos "Access" e retorna uma string com os IDs das "root applications", separados por vírgulas.
   * @param accesses Array de objetos "Access"
   * @return String com os IDs das "root applications"
   */
  private getRootIdExcepts(accesses: Access[]): string {
    let args = accesses.map(access => access.application.id);
    return args.join(',');
  }


}
