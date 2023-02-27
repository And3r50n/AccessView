import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Department } from 'src/app/core/entities/Department';
import { Resource } from 'src/app/core/entities/Resource';
import { PropertiesService } from '../properties.service';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private departments = new Subject<Department[]>();
  private owners = new Subject<Resource[]>();

  constructor(private service: PropertiesService) {
    service.getProfileMap().subscribe(profile => {
      this.departments.next(profile.departments);
      this.owners.next(profile.owners);

    })
  }

  public getOwners(){
    return this.owners.asObservable();
  }

  public getDepartments(){
    return this.departments.asObservable();
  }



}