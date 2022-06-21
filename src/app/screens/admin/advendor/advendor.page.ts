/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { User1 } from 'src/app/models/user1';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-advendor',
  templateUrl: './advendor.page.html',
  styleUrls: ['./advendor.page.scss'],
})
export class AdvendorPage implements OnInit {

  regForm: User1 = new User1;
  selectTabs = 'list';
  vendors: any;
  allVendors: any;

  errors = [];

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController, 
    private loadCrt: LoadingController,
    public nav: NavController,
    private toast: LoadToastService,
    private router: Router,
    private authService: AuthService) {
    // this.tempF = this.foods;
    // this.getCart();
  }


  ngOnInit() {
    this.getVendorshipReq()
    this.getAllVenmdors()
  }

  acceptVendorShip(id: any){
    this.userService.acceptVendorShip(id).subscribe({
      next: (data: any) => {
        this.toast.presentLoading()
        this.toast.logToast('Vendor Has been Accepted');
        this.ngOnInit();

        
      
      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })

  }

  getVendorshipReq(){
    this.userService.getVendorRequests().subscribe({
      next: (data: any) => {
        this.toast.presentLoading()

        
        console.log("Venodrs",data)
      

        this.vendors = data.vendors;

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })
  }


  
  getAllVenmdors(){
    this.userService.getAllVenmdors().subscribe({
      next: (data: any) => {
        this.toast.presentLoading()

        
        console.log("Venodrs",data)
      

        this.allVendors = data.vendors;

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })
  }

  deleteVendorAcc(id: any){
    this.userService.deleteVendorAcc(id).subscribe({
      next: (data: any) => {
        this.toast.presentLoading()
        this.toast.logToast('Vendor Has been Deleted');
        this.ngOnInit();

        
      
      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })

  }

  // signup(){

  //   this.authService.signUp(this.regForm).subscribe({
  //     next: data => {
  //       console.log('Sign in data:',data);
  //       this.errors = [];

  //         this.router.navigate(['/main/adcustomer'], {
  //         queryParams: { message: 'You have registered successfully' }
  //       });

  //     },
  //     error: err => {
  //       this.errors[0] = err.message;
  //     }
  //   });
  // }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home/listing']);
    console.log("You out!!")
  }


}
