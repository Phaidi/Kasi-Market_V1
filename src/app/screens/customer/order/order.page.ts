/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address/address.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { PayService } from 'src/app/services/pay/pay.service';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  adForm: Address = new Address();

  date = new Date();
  orders = [];
  myCart: any;
  errors = [];
  sum: any = 0;
  orderNum: any;
  address: any;
  len: any = 0;
  id: any;
  constructor(
    private cartService: CartService,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private payService: PayService,
    private toast: LoadToastService) {
      this.id = +this.activatedRoute.snapshot.paramMap.get('id');
     }

  ngOnInit() {

    this.getCart();
    this.orderNum =  Date.now().toString().substr(-4) + (Math.floor(Math.random() * (500 - 100) + 100));
    console.log(this.orderNum, this.address);


  }

  getCart(){
    this.cartService.getCart().subscribe({
      next: (data: any) => {
        this.toast.presentLoading();



        data.carts.forEach(a => this.sum += a.item.price * a.quantity);
        if(this.id == 1){
          this.sum += 0;

        }
        else{
          this.getAddress();
          this.sum += 65;
        }
        console.log('Im in cart data :',data.carts.length);
        // this.errors = [];



        this.len = data.carts.length;

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    });
  }


 async getAddress(){
     await this.addressService.getAddress().subscribe({
      next: (data: any) => {
        this.address = data;


        console.log('Im in Address data :', this.address,data);
        // this.errors = []

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    });
  }


  async checkOut(){

    const  data = {
      amount: this.sum,
      orderNum: this.orderNum,
      deliveryType: this.id
    };
    await this.payService.checkOut(data).subscribe({
     next: async (data: any) => {
       this.errors = [];
      //  console.log(data.session.url)
      const stripe = await loadStripe(`pk_test_51L9xZ0AJ7djmLPomIaBL4GY1UZlQYluus6uo31LE0mCYdkrBtdD9GYXZ1HUURnBaPvIuFrCHkzu8NIR4FAL5z3dy00CsMYLhh9`);


      await stripe.redirectToCheckout({
          sessionId: data.session.id

        });

     },
     error: err => {
       // this.errors[0] = err.message;
     }
   });
 }


}
