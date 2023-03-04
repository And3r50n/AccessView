import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BranchRole } from 'src/app/core/entities/access/application/BranchRole';
import { RoleApplication } from 'src/app/core/entities/access/application/role/RoleApplication';
import { BranchApplication } from 'src/app/core/entities/access/BranchApplication';



@Injectable({
  providedIn: 'root'
})


export class AddRoleService {

  private readonly API = 'main/role'

  constructor(private http: HttpClient) { }

  public getRoles(branch: BranchApplication): any{
    let params = new HttpParams();
    params = params.append('id', branch.application.id);
    params = params.append('excepts', this.getRolesIdExcepts(branch.branches));
    return this.http.get<Observable<RoleApplication[]>>(this.API,{params});
  }

  
  /**
   * Recebe um array de objeto "BranchRole" e retorna uma string com os IDs das "branch roles", separados por vírgulas.
   * @param branches Array de objetos "BranchRole"
   * @return String com os IDs das "branch roles"
   */
  private getRolesIdExcepts(branches: BranchRole[]) {
    let excepts = branches.map(branche => branche.role.id).join(',');
    return excepts;
  }


}
