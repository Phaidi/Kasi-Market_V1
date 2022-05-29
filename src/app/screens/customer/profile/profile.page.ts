/* eslint-disable new-parens */
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User1 } from '../../../models/user1';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profForm: User1 = new User1;

  selectTabs = 'profile';
  data: User1 = new User1;


  constructor(private userService: UserService,
    private alertCtrl: AlertController, 
    private toast: LoadToastService) { }

  ngOnInit() {
    this.getMe()
  }

  getMe(){
    this.toast.presentLoading()
    this.userService.getMyWishes().subscribe({
      next: (data: any) =>{
        console.log('Hello from my details',data.me);
        this.data = data.me;

      },
      error: err =>{
        console.log(err);
      }
    });

  }



}
