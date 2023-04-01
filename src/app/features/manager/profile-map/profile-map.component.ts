import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private service: ProfileMapService, private router: Router){
  }

  ngOnInit(): void {
    this.service.findAllProfiles().subscribe(data =>{
      this.profiles = data;
    });   
  }

}
