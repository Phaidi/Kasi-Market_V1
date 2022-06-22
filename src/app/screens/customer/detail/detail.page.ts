import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastController } from '@ionic/angular';
import { ItermService } from 'src/app/services/iterm/iterm.service';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { WishService } from 'src/app/services/wish/wish.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food = {} as Food;
  vendor: string;


  constructor(private activatedRoute: ActivatedRoute,
    private wishService: WishService,
    private cartService: CartService,
    private itermService: ItermService,
    private toast: LoadToastService,)
  {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  };

  ngOnInit() {
    
    this.getIterm()
  }

  getIterm(){
    console.log(this.id, );
    // this.activatedRoute.params.subscribe(
    //   (params: {id: string}) => {
    //     this.id = +params.id;
    //     console.log(this.id);
    //   }
    // );
    this.toast.presentLoading()
    this.itermService.getIterm(this.id).subscribe({
      next: (data: any) =>{
        console.log('Hello from details',data.user.name);
        this.food = data.item;
        this.vendor = data.user.name+" " +data.user.surname;


      },
      error: err =>{
        console.log(err);
      }
    });

  }

  makeWish(id: any){
    console.log("hello", id)
    this.toast.presentLoading()
    this.wishService.makeWish({itemId:id}).subscribe({
      next: (data: any) =>{
        console.log('Hello from details',data.wish);
        // this.presentToast('Item added to the Wishlist 😋!!');
        this.toast.logToast('Item added to the Wishlist 😋!!')

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

        this.toast.logToast('Item added to the cart!!');
      },
      error: err =>{
        console.log(err);
      }
    });


  }



}
