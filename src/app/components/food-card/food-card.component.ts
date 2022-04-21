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
   
    this.cartService.addToCart(this.item.id).subscribe({
      next: (data:any) =>{
             
        this.presentToast();
      },
      error: err =>{
        console.log(err)
      }
    })
    
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
