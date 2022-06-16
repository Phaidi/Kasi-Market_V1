/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { User1 } from 'src/app/models/user1';

@Component({
  selector: 'app-adcustomer',
  templateUrl: './adcustomer.page.html',
  styleUrls: ['./adcustomer.page.scss'],
})
export class AdcustomerPage implements OnInit {

  regForm: User1 = new User1;
  selectTabs = 'list';

  constructor() { }

  ngOnInit() {
  }

}
