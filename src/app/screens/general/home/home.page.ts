import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // isAuth: boolean = false;
  constructor(public auth: AuthService) {}


  // checkAuth(){
  //   this.isAuth = this.auth.isAuthenticated;
  // }

}
