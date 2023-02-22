import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/app/core/entities/Resource';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-profile-owner',
  templateUrl: './profile-owner.component.html',
  styleUrls: ['./profile-owner.component.scss', '../resume.component.scss']
})
export class ProfileOwnerComponent implements OnInit {

  public owners: Resource[] = []

  constructor(private service: ResumeService) {

  }

  ngOnInit(): void{
    this.service.getOwners().subscribe(owners => this.owners = owners);
  }







}
