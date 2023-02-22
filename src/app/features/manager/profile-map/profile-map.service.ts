import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileMap } from 'src/app/core/entities/ProfileMap';

@Injectable({
  providedIn: 'root'
})


export class ProfileMapService {

  private readonly API = 'main/profile'
  
  constructor(private http: HttpClient) { 
  }
  
  findAllProfiles(){
    return this.http.get<ProfileMap[]>(this.API);
  }


  getProfile(id: number){
    //implement this compoment a custon search for profile mapping
  }
}
