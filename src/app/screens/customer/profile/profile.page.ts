/* eslint-disable eqeqeq */
/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User1 } from '../../../models/user1';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { OrdersService } from 'src/app/services/orders/orders.service';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { pdfMake } from 'pdfmake/build/pdfmake';
import { pdfFonts } from 'pdfmake';

// pdfMake.vfs = pdfFonts.vfs;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  regForm: User1 = new User1;
  upForm: User1 = new User1;
  errors = [];
  sum = 0;
  items: any;

  selectTabs = 'orders';
  data: User1 = new User1;
  orders: any;

  pdfObj = null;


  constructor(
    private userService: UserService,
    private orderService: OrdersService,
    private alertCtrl: AlertController,
    private toast: LoadToastService,
    private plt: Platform,
    // private file: File,
    // private fileOpener: FileOpener
    ) { }

  ngOnInit() {
    this.getMe();
    this.getOrders();
    this.regForm = new User1;
  }

  getMe(){
    this.toast.presentLoading();
    this.userService.getMe().subscribe({
      next: (data: any) =>{
        console.log('Hello from my details',data.me);
        this.data = data.me;

      },
      error: err =>{
        console.log(err);
      }
    });

  }

  userDate(date){
    return date.substr(0,10);
  }
  deliveryDate(date){
    const d = new Date(date.substr(0,10));
    d.setDate(d.getDate() + 7);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }
  getSatus(date){

    // date = new Date(date.substr(0,10));
    const d = new Date(date.substr(0,10));
    d.setDate(d.getDate() + 7);

    return  d.toDateString() >= Date() ? 'On the way': 'Delivered';

  }

  getOrders(){
    this.toast.presentLoading();
    this.orderService.getOrders().subscribe({
      next: (data: any) =>{
        console.log('Hello Orders',data.orders);
        console.log('Hello Items',data.items);



        this.items = data.items;
        this.orders = data.orders;

      },
      error: err =>{
        console.log(err);
      }
    });

  }

  getSum(orderNum){
    let sum =0;
    this.items.forEach(a => {
      if(orderNum ==a.orderNum) {
        sum += a.item.price * a.quantity;
        // console.log('Hello Sum',a.orderNum);
      }

    });
    return sum;

  }

  changePassword(){

    this.toast.presentLoading();
    this.userService.upateAccount(this.regForm).subscribe({
      next: (data: any) =>{
        console.log('Hello from my details',data.me);
        this.data = data.me;

      },
      error: err =>{
        // console.log(err);
        this.errors[0] = err.message;
      }
    });
  }


  requestVendorship(){


    this.toast.presentLoading();
    this.userService.requestVendorship(this.upForm).subscribe({
      next: (data: any) =>{

        this.toast.logToast('Vendor request was successfull 😋!!');
      },
      error: err =>{
        console.log(err);
      }
    });
  }

 createPdf() {
  const docDefinition ={
    content: [
      { text: 'Reminder',  style: 'header'},
      { text: new Date().toTimeString(), alignment: 'right' },

      { text: 'From', style: 'subheader' },
      { text: this.orders.orderNum},

      { text: 'To', style: 'subheader' },
      this.orders.createdAt,

      { text: this.sum , style: 'story', margin: [0, 20, 0, 20] },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 15, 0, 0]
      },
      story: {
        italic: true,
        alignItems: 'center',
        width: '50%',
      }
    }
  };
  this.pdfObj = pdfMake.createPdf(docDefinition);
  this.downloadPdf();
 }

 downloadPdf() {
  if (this.plt.is('cordova')) {

  } else {
    this.pdfObj.download();
  }
 }

}
