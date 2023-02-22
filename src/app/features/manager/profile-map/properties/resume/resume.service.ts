import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Division } from 'src/app/core/entities/Division';
import { Resource } from 'src/app/core/entities/Resource';
import { PropertiesService } from '../properties.service';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private divisions = new Subject<Division[]>();
  private owners = new Subject<Resource[]>();

  constructor(private service: PropertiesService) {
    service.getProfileMap().subscribe(profile => {
      this.divisions.next(profile.divisions);
      this.owners.next(profile.owners);

    })
  }

  public getOwners(){
    return this.owners.asObservable();
  }

  public getDivisions(){
    return this.divisions.asObservable();
  }



}