
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { Item } from 'src/app/core/entities/access/Item';
import { AccessService } from '../../access.service';

@Injectable({
  providedIn: 'root'
})
export class AddSubApplicationService {

  private readonly API = 'api/manager/profile/application/item/'

  constructor(private http: HttpClient, private service: AccessService) {

  }

  public getItens(access: Access): any{
    let params = new HttpParams();
    params = params.append('id', access.code);
    params = params.append('excepts', this.getExceptId(access));
    return this.http.get<Observable<Item[]>>(this.API,{params});
  }

  private getExceptId(access: Access): string  {
    return access.itens.map(item => item.code).join(',');
  }
}
