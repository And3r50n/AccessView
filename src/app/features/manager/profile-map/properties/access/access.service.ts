import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Access } from 'src/app/core/entities/access/Access';
import { BranchApplication } from 'src/app/core/entities/access/BranchApplication';


@Injectable({
  providedIn: 'root'
})

export class AccessService {

  private readonly API = '/main/access/';
  private warnings = new Subject<number>();
  private accesses = new Subject<Access[]>();
  private branche = new Subject<BranchApplication>(); 
  private access = new Subject<Access>();

  constructor(private http: HttpClient) {

  }

  public findAccess(id: number): void{
    this.findProfileAccess(id).subscribe(
      (accesses: Access[]) => this.accesses.next(accesses),
      (error: string) => console.log('Ocorreu uma falha: '+error)
    );
  }  

  private findProfileAccess(id: number): any{
    return this.http.get<Observable<Access[]>>(this.API+id);
  }

  public setAccesses(accesses: Access[]){
    this.accesses.next(accesses);
  }

  public setAccess(access: Access){
    this.access.next(access);
  }

  public getAccesses(){
    return this.accesses.asObservable();
  }

  public getAccess(){
    return this.access.asObservable();
  }

  public setBranchApplication(branch: BranchApplication){
    this.branche.next(branch);
  }

  public getBranchApplication(){
    return this.branche.asObservable();
  }

  public getWarnings(){
    return this.warnings.asObservable();
  }

}
