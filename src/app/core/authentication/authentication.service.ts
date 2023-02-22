import { Injectable } from '@angular/core';
import { User } from 'src/app/core/entities/User';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor() { }


  //Serviço teste estático de autenticação de usuário
  signIn(user: User){
    if(user.name == "E5006343"){
      if(user.password == "j1234"){
        return true;
      }
    }
    return false;
  }


}
