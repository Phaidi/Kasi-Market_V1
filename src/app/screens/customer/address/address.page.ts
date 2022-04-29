import { Component, OnInit } from '@angular/core';
import { Address } from '../../../models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  adForm: Address = new Address();

  constructor() { }

  ngOnInit() {
  }

}
