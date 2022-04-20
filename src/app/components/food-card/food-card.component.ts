import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {

  @Input() item: Food;

  @Output() clicked = new EventEmitter();

  constructor(private foodService: FoodService,
    private cartService: CartService,
    private toastCtrl: ToastController){};

  addItemToCart() {
    const cartitem: CartItem = {
      id: this.item.id,
      name: this.item.title,
      price: this.item.price,
      image: this.item.image,
      quantity: 1,
    };

    this.cartService.addToCart(cartitem);
    this.presentToast();
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
