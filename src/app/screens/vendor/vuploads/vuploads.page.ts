import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCardComponent } from 'src/app/components/food-card/food-card.component';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { Food } from 'src/app/models/food.model';
import { AddressService } from 'src/app/services/address/address.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ItermService } from 'src/app/services/iterm/iterm.service';
import { PayService } from 'src/app/services/pay/pay.service';

@Component({
  selector: 'app-vuploads',
  templateUrl: './vuploads.page.html',
  styleUrls: ['./vuploads.page.scss'],
})
export class VuploadsPage implements OnInit {

  upForm: Food = new Food;
  errors: any;

  constructor(
    private itemService: ItermService,
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private payService: PayService,
    private toast: LoadToastService) { 
     }

  ngOnInit() {
  }

  createItem(){

    this.itemService.createItem(this.upForm).subscribe({
      next: data => {
        console.log('Create Item in data:',data);
        this.errors = [];
        this.toast.logToast('Item Created !!')

        this.router.navigate(['/vdash/vlist']);

      },
      error: err => {
        this.errors[0] = err.message;
      }
    });
  }

}
