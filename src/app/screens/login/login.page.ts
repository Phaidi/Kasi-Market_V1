import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User1 } from '../../models/user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logForm: User1 = new User1();
  errors = [];

  constructor(private authService: AuthService,
              private router: Router,
              public loadingController: LoadingController) { }

  ngOnInit() {
  }

  login(){
    this.authService.logIn(this.logForm).subscribe({
      next: data => {
        console.log('Log in data:',data);
        this.errors = [];

        this.presentLoading();

        this.router.navigate(['/home/listing']);

      },
      error: err => {
        this.errors[0] = err.message;
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
