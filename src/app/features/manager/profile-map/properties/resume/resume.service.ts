import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Resource } from 'src/app/core/entities/Resource';
import { Section } from 'src/app/core/entities/Section';
import { PropertiesService } from '../properties.service';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private departments = new Subject<Section[]>();
  private owners = new Subject<Resource[]>();

  constructor(private service: PropertiesService) {
    service.getProfileMap().subscribe(profile => {
      this.departments.next(profile.sections);
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