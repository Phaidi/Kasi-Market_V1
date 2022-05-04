import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { Upload } from 'src/app/models/upload';
import { CartService } from 'src/app/services/cart/cart.service';
import { ItermService } from 'src/app/services/iterm/iterm.service';

@Component({
  selector: 'app-vdetail',
  templateUrl: './vdetail.page.html',
  styleUrls: ['./vdetail.page.scss'],
})
export class VdetailPage implements OnInit {

  upForm: Upload = new Upload();

  id: number;
  food: Food;

  constructor(private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private itermService: ItermService,) { }

  ngOnInit() {
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

        //this.presentToast();
      },
      error: err =>{
        console.log(err);
      }
    });

    // this.cartService.addToCart(cartitem);

  }

}
