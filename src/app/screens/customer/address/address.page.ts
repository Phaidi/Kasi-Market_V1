/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { AddressService } from 'src/app/services/address/address.service';
import { Address } from '../../../models/address';
// import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  adForm: Address = new Address();
  errors = [];
  id: number;
  distance = 0;

  constructor(
    private addressService: AddressService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: LoadToastService) {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    }

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

  saveAddress(){

    console.log("This is your form!!!!:",this.adForm);
    this.addressService.createAddress(this.adForm).subscribe({
      next: (data: any) => {
        this.toast.presentLoading();
        this.errors = [];
    this.router.navigate(['/order/'+this.id]);

      },
      error: err => {
        this.errors[0] = err.message;
      }
    });

  }

  async getTown() {
    this.adForm.town = "";
    this.distance = 0;
    // if(this.adForm.town = "Pretosria central") {
    //   this.distance = 29.8;
    //   this.adForm.dis = this.distance;
    // } else if(this.adForm.town = "Pretoria north"){
    //   this.distance = 21.2;
    // } else if(this.adForm.town = "Pretoria west"){
    //   this.distance = 29.8;
    // } else if(this.adForm.town = "Mabopane"){
    //   this.distance = 8.7;
    // }
    // hello
  }

}
