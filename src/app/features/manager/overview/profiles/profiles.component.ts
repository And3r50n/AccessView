import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/core/entities/Profile';
import { ProfilesService } from './profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  public profiles: Profile[] = [];
  public columns: string[] = ['code', 'descript'];

  constructor(private service: ProfilesService, private router: Router){
  }

  ngOnInit(): void {
    this.service.findAllProfiles().subscribe(data =>{
      this.profiles = data;
    });   
  }



}
