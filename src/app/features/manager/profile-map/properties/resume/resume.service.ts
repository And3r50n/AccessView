import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Resource } from 'src/app/core/entities/Resource';
import { Section } from 'src/app/core/entities/Section';
import { PropertiesService } from '../properties.service';



@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private sections = new Subject<Section[]>();
  private owners = new Subject<Resource[]>();

  constructor(private service: PropertiesService) {
    service.getProfileMap().subscribe(profile => {
      this.sections.next(profile.sections);
      this.owners.next(profile.owners);

    })
  }

  public getOwners(){
    return this.owners.asObservable();
  }

  public getSections(){
    return this.sections.asObservable();
  }



}