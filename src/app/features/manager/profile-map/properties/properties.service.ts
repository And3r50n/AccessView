import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { Profile } from 'src/app/core/entities/Profile';

@Injectable({
  providedIn: 'root'
})


export class PropertiesService {


  private readonly API = 'api/manager/profile/'

  
  private profile = new Subject<Profile>();


  constructor(private http: HttpClient) { 

  }

  public findProfileById(id: number): void {
    this.http.get<Profile>(`${this.API}${id}`).pipe(
      catchError(() => {
        return throwError(() => new Error('Error'));
      })
    ).subscribe(
      (profile: Profile) => this.profile.next(profile)
    );
  }
  
  public getProfileMap(): Observable<Profile>{
    return this.profile.asObservable();
  }


}




