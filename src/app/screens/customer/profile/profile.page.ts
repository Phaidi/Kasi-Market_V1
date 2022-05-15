/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { User1 } from '../../../models/user1';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profForm: User1 = new User1;

  selectTabs = 'profile';

  name = 'Phaidi';
  lname = 'Mathabz';
  email = 'pmat@mail.com';

  constructor() { }

  ngOnInit() {
  }

}
