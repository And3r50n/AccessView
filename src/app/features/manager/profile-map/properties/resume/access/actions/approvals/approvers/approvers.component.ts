import { Component, OnInit } from '@angular/core';
import { TeamResource } from 'src/app/core/entities/TeamResource';
import { ApproversService } from './approvers.service';

@Component({
  selector: 'app-approvers',
  templateUrl: './approvers.component.html',
  styleUrls: ['./approvers.component.scss','../../actions.component.scss']
})
export class ApproversComponent implements OnInit {

  public displayedColumns = ['name','email'];
  public teamResource: TeamResource[] = [];


  constructor(private service: ApproversService) { }

  ngOnInit(): void {

  }


  public getApprovers(id: number){
    this.service.getResourceApprovers(id).subscribe((tr: TeamResource[]) => {
      this.teamResource = tr
    });
  }


}
