import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Access } from 'src/app/core/entities/access/Access';
import { AccessService } from '../access.service';


@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  private accesses: Access[] = [];

  
  constructor(private http: HttpClient, private service: AccessService){ 
    this.service.getAccesses().subscribe(accesses => this.accesses = accesses);
  }


  public getAccesses(){
    return this.accesses;
  }


  public filterStructuresWithRolesStatus0(data: Access[]): any[]{
    return data.map(access => {
      let newAccess = {...access};
      newAccess.branches = access.branches
        .filter(brancheSubApplication => brancheSubApplication.branches.some(branchRole => branchRole.status === 0))
        .map(brancheSubApplication => {
          let newBrancheSubApplication = {...brancheSubApplication};
          newBrancheSubApplication.branches = brancheSubApplication.branches.filter(branchRole => branchRole.status === 0);
          return newBrancheSubApplication;
        });
      return newAccess.branches.length > 0 ? newAccess : null;
    }).filter(access => access !== null);
  }

  
}
