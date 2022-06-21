/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { User1 } from 'src/app/models/user1';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-adcustomer',
  templateUrl: './adcustomer.page.html',
  styleUrls: ['./adcustomer.page.scss'],
})
export class AdcustomerPage implements OnInit {

  regForm: User1 = new User1;
  selectTabs = 'list';

  users: any;
  errors = [];

  constructor(
    private userService: UserService,
    private alertCtrl: AlertController, 
    private loadCrt: LoadingController,
    public nav: NavController,
    private toast: LoadToastService,
    private router: Router,
    private authService: AuthService
    ) {
    // this.tempF = this.foods;
    // this.getCart();
  }


  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe({
      next: (data: any) => {
        this.toast.presentLoading()

        
        console.log("Venodrs",data)
      

        this.users = data.users;

      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })
  }

  deleteUserAcc(id: any){
    this.userService.deleteUserAcc(id).subscribe({
      next: (data: any) => {
        this.toast.presentLoading()
        this.toast.logToast('User Has been Deleted');
        this.ngOnInit();

        
      
      },
      error: err => {
        // this.errors[0] = err.message;
      }
    })

  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/home/listing']);
    console.log("You out!!")
  }

}
