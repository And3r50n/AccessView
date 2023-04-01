import { Component } from '@angular/core';
import { Profile } from 'src/app/core/entities/Profile';
import { ProfileMapService } from './profile-map.service';


@Component({
  selector: 'app-profile-map',
  templateUrl: './profile-map.component.html',
  styleUrls: ['./profile-map.component.scss']
})


export class ProfileMapComponent {

  public profiles: Profile[] = [];
  public columns: string[] = ['code', 'descript'];

  constructor(private service: ProfileMapService){
  }

  ngOnInit(): void {
    this.service.getProfiles().subscribe(data =>{
      this.profiles = data;
    });   
  }

}
