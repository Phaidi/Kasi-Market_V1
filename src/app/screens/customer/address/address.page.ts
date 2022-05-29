import { Component, OnInit } from '@angular/core';
import { Address } from '../../../models/address';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  adForm: Address = new Address();

  constructor() { }

  ngOnInit() {
    // this.getCurrentLocation();
  }

  // async getCurrentLocation() {
  //   try {
  //     const coordinates = await Geolocation.getCurrentPosition();
  //     console.log('Current location: ', coordinates);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

}
