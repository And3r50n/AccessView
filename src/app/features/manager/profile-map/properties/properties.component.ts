import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from './properties.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

export class PropertiesComponent implements OnInit {

  public code: string = 'PF0000';

  constructor(private route: ActivatedRoute, private service: PropertiesService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.service.findProfileById(params['id']);
      this.service.getProfileMap().subscribe(profile => this.code = profile.code+" - "+profile.description);
    });
  }

}
