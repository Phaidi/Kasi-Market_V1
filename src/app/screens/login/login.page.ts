import { Component, OnInit } from '@angular/core';
import { User1 } from '../../models/user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logForm: User1 = new User1();

  constructor() { }

  ngOnInit() {
  }

}
