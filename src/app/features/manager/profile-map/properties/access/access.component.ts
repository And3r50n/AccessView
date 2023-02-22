import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessService } from './access.service';


@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss', '../properties.component.scss'],
})


export class AccessComponent implements OnInit {

  constructor(private service: AccessService, private route: ActivatedRoute) { 
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.service.findAccess(params['id']);
    });
  }

}
  


