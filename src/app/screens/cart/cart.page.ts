/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  // cartItems$: Observable<CartItem[]>;
  // totalAmount$: Observable<number>;
  myCart: any[]

  // foods: any[] = [];
  // codeItems: any;

  // tempF: any[] = [];

  


  constructor(private cartService: CartService,
    private alertCtrl: AlertController) {
    // this.tempF = this.foods;
    this.getCart();
  }

  ngOnInit() {
    // this.cartItems$ = this.cartService.getCart()
    // this.getCart();
    // this.totalAmount$ = this.cartService.getTotalAmount();
  }

  getCart(){
    this.cartService.getCart().subscribe({
      next: (data: any) => {
        console.log('Im in cart data :',data.carts)
        // this.errors = [];

        this.myCart = data.carts;

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })
  }

  onIncrease(item: CartItem) {

    const quantity = item.quantity +1
    this.changeQty(quantity, item.id);
    
  }

  onDecrease(item: CartItem) {
    
    if (item.quantity === 1) {this.removeFromCart(item);}
    else {
      const quantity = item.quantity -1
    this.changeQty(quantity, item.id);
    }
  }

  changeQty(quantity, id){
    this.cartService.changeQty(quantity, id).subscribe({
      next: (data: any) => {
        console.log(data)
      },
      error: err => {
        console.log(err)
      }
    });
  }

  async removeFromCart(item: CartItem) {
    // console.log(item)
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove item',
      buttons: [
        {
          text: 'yes',
          //handler: () => this.cartService.removeItem(item.id),
          handler: () => this.cartService.removeItem(item.id).subscribe({
            next: (data: any) =>{
              console.log('Hello from delete',data)
             
      
            },
            error: err =>{
              console.log(err)
            }
          }),
        },
        {
          text: 'No',
        },
      ],
    });

    alert.present();
  }

  // searchCode(data) {

  //   const value = data.target.value;

  //   this.foods = this.tempF;


  //   const filter = this.test1.filter(el => el.code.toString() === (value));
  //   this.foods = filter;

  //   if (value === '' || !filter) {
  //     this.foods = []
  //     this.codeItems = [];
  //   };



  // }

  // getCodeProducts(code) {
  //   const filter = this.test1.find(el => el.code === code);

  //   this.codeItems = filter.order;

  //   // console.log('Hello',filter.order)

  // }

  // addToCart(order) {

  //   // console.log(order.length)
  //   if (order.length > 1) {

  //     order.forEach(el => {

  //       el.quantity = 1;
  //       el.name = el.title;
  //       this.cartService.addToCart(el)
  //     });
  //   } else {
  //     order[0].quantity = 1;
  //     order[0].name = order[0].title;
  //     this.cartService.addToCart(order[0])
  //   }
    // this.cartItems$ = this.cartService.getCart();
    // this.totalAmount$ = this.cartService.getTotalAmount();

  //}


}
