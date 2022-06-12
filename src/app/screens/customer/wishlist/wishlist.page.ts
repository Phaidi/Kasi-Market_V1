import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { WishService } from 'src/app/services/wish/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  wishes: any[] = [];

  constructor(
    private wishservice: WishService,
    private alertCtrl: AlertController,
    private toast: LoadToastService
    ) { }

  ngOnInit() {
    this.getWishes();
  }

  getWishes(){
    this.toast.presentLoading();
    this.wishservice.getMyWishes().subscribe({
      next: (data: any) =>{
        console.log('Hello from details',data.wishes);
        this.wishes = data.wishes;

      },
      error: err =>{
        console.log(err);
      }
    });

  }

  async moveToCart(wish: CartItem) {
    console.log(wish);
    // const alert = await this.alertCtrl.create({
    //   header: 'Remove',
    //   message: 'Are you sure you want to move item to cart ?',
    //   buttons: [
    //     {
    //       text: 'yes',

    //       handler: () => this.wishservice.moveToCart(wish).subscribe({
    //         next: (data: any) =>{
    //           console.log('Hello from delete',data);
    //           this.ngOnInit();


    //         },
    //         error: err =>{
    //           console.log(err);
    //         }
    //       }),
    //     },
    //     {
    //       text: 'No',
    //     },
    //   ],
    // });

    // alert.present();
  }


  async removeFromCart(item: CartItem) {
    // console.log(item)
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove item',
      buttons: [
        {
          text: 'yes',

          handler: () => this.wishservice.removeItem(item.id).subscribe({
            next: (data: any) =>{
              console.log('Hello from delete',data);
              this.ngOnInit();


            },
            error: err =>{
              console.log(err);
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


}
