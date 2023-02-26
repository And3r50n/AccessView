import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Profile } from 'src/app/core/entities/Profile';

@Injectable({
  providedIn: 'root'
})


export class PropertiesService {

  constructor(private http: HttpClient) { 
  }

  private readonly API = 'api/manager/profile/'
  private profile = new Subject<Profile>();

  public findProfileMap(id: number): void{
    this._findProfileMap(id).subscribe((profile: Profile) => this.profile.next(profile))
  }

  private _findProfileMap(id: number): any{
    return this.http.get<Observable<Profile>>(this.API+id);
  }

  public getProfileMap(): Observable<Profile>{
    return this.profile.asObservable();
  }


}




