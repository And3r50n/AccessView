import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profile } from 'src/app/core/entities/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileMapService {

  private readonly API = "api/manager/profile/";
  
  constructor(private http: HttpClient) { 
  }

  findAllProfiles(){
    return this.http.get<Profile[]>(this.API);
  }
}
