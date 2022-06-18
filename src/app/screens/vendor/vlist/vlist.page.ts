import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { CartItem } from 'src/app/models/cart-item.model';
import { Food } from 'src/app/models/food.model';
import { AddressService } from 'src/app/services/address/address.service';
import { ItermService } from 'src/app/services/iterm/iterm.service';
import { PayService } from 'src/app/services/pay/pay.service';

@Component({
  selector: 'app-vlist',
  templateUrl: './vlist.page.html',
  styleUrls: ['./vlist.page.scss'],
})
export class VlistPage implements OnInit {

  foods: Food[] = [];
  tempF: Food[] = [];
  items: any;

  constructor(
    private itemService: ItermService,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private payService: PayService,
    private toast: LoadToastService,
    private alertCtrl: AlertController, 
    private loadCrt: LoadingController,
    public nav: NavController,) { }

  ngOnInit() {

    this.listItems()
  }

  search(data){

    const value = data.target.value;

    this.foods = this.tempF;

    const filter = this.foods.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));

    this.foods = filter;

  }

  goToDetailPage(id: number){
    this.router.navigate(['detail', id]);
  }

  async deleteItem(id: any) {
    // console.log(item)
    const alert = await this.alertCtrl.create({
      header: 'Remove',
      message: 'Are you sure you want to remove item',
      buttons: [
        {
          text: 'yes',
          //handler: () => this.cartService.removeItem(item.id),
          handler: () => this.itemService.deleteItem(id).subscribe({
            next: (data: any) =>{
              console.log('Hello from delete',data)
              this.ngOnInit();
             
      
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

  listItems(){

    this.itemService.listItems().subscribe({
      next: data => {
        console.log('Create Item in data:',data);
  
       

        this.items = data.items
      },
      error: err => {
       
      }
    });
  }

}
