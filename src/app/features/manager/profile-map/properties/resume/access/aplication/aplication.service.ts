import { Injectable } from '@angular/core';
import { Access } from 'src/app/core/entities/access/Access';
import { BranchApplication } from 'src/app/core/entities/access/BranchApplication';
import { AccessService } from '../access.service';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  constructor(private service: AccessService) {
  }

  public setAccess(access: Access){
    this.service.setAccess(access);
  }

  public getAccesses(){
    return this.service.getAccesses();
  }

  public setAccesses(accesses: Access[]){
    return this.service.setAccesses(accesses);
  }

  public setBranchApplication(branche: BranchApplication){
    this.service.setBranchApplication(branche);
  }



}

