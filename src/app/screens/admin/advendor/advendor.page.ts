/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { User1 } from 'src/app/models/user1';

@Component({
  selector: 'app-advendor',
  templateUrl: './advendor.page.html',
  styleUrls: ['./advendor.page.scss'],
})
export class AdvendorPage implements OnInit {

  regForm: User1 = new User1;
  selectTabs = 'list';

  constructor() { }

  ngOnInit() {
  }

}
