/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { Address } from '../../../models/address';
// import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  adForm: Address = new Address();

  distance = 0;

  constructor() { }

  ngOnInit() {
    // this.getCurrentLocation();
    this.getTown();
    console.log('address town:', this.distance);
  }

  // async getCurrentLocation() {
  //   try {
  //     const coordinates = await Geolocation.getCurrentPosition();
  //     console.log('Current location: ', coordinates);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async getTown() {
    if(this.adForm.town = "Pretoria central") {
      this.distance = 29.8;
      this.adForm.dis = this.distance;
    } else if(this.adForm.town = "Pretoria north"){
      this.distance = 21.2;
    } else if(this.adForm.town = "Pretoria west"){
      this.distance = 29.8;
    } else if(this.adForm.town = "Mabopane"){
      this.distance = 8.7;
    }
    // hello
  }

}
