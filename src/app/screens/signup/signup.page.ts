/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { User1 } from '../../models/user1';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

  regForm: User1 = new User1;

  constructor() { }

  ngOnInit() {
  }

}
