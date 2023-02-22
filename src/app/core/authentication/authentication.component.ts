import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { User } from 'src/app/core/entities/User';




@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})



export class AuthenticationComponent implements OnInit {

  public user = new User;
  public authenticated: boolean = false;
  private router: Router;


  constructor(private service: AuthenticationService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {

  }


  authenticate(){
    if(this.service.signIn(this.user)){
      this.router.navigate(['/home']);
    }
  }
}
