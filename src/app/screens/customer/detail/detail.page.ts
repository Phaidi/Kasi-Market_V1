import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastController } from '@ionic/angular';
import { ItermService } from 'src/app/services/iterm/iterm.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food;

  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private itermService: ItermService,
    private toastCtrl: ToastController)
  {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  };

  ngOnInit() {
    // this.getIterm()
  }

  getIterm(){
    console.log(this.id);

    this.itermService.getIterm(this.id).subscribe({
      next: (data: any) =>{
        console.log('Hello from details',data.iterm);
        this.food = data.iterm;

      },
      error: err =>{
        console.log(err);
      }
    });

  }

  addItemToCart() {

    this.cartService.addToCart(this.id).subscribe({
      next: (data: any) =>{
        console.log('Hello from details',data);

        this.presentToast();
      },
      error: err =>{
        console.log(err);
      }
    });

    // this.cartService.addToCart(cartitem);

  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Item added to the cart!!',
      mode: 'ios',
      duration: 1000,
      position: 'top',
    });

    toast.present();
  }

}
