import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CartItem } from '../../models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent {

  @Input() item: Food;

  constructor(
    private cartService: CartService,
    private router: Router,
    private toast: LoadToastService){};

    navigate(id){
      console.log("this is your id",id)
      this.router.navigate([`/detail/`+id]);
    }

  addItemToCart() {

    this.cartService.addToCart(this.item.id).subscribe({
      next: (data: any) =>{

      
        this.toast.logToast(data.message);
      },
      error: err =>{
        console.log("hello ",err.message);

       
        this.toast.logToast(err.message);
      }
    });

  }

}
