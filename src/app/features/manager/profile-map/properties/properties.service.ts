import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProfileMap } from 'src/app/core/entities/ProfileMap';

@Injectable({
  providedIn: 'root'
})


export class PropertiesService {

  constructor(private http: HttpClient) { 
  }

  private readonly API = 'main/profile/'
  private profileMap = new Subject<ProfileMap>();

  public findProfileMap(id: number): void{
    this._findProfileMap(id).subscribe((profile: ProfileMap) => this.profileMap.next(profile))
  }

  private _findProfileMap(id: number): any{
    return this.http.get<Observable<ProfileMap>>(this.API+id);
  }

  public getProfileMap(): Observable<ProfileMap>{
    return this.profileMap.asObservable();
  }


}




