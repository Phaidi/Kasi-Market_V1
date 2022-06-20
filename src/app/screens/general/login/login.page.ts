import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { LoadToastService } from 'src/app/helpers/toastHandler';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User1 } from '../../../models/user1';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logForm: User1 = new User1();
  errors = [];
  message: string;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private toast: LoadToastService,
              public loadingController: LoadingController,
              private loadCrt: LoadingController) { }

  ngOnInit() {
    this.checkMessage();
  }

  login(){
    this.authService.logIn(this.logForm).subscribe({
      next: data => {
        console.log('Log in data:',data);
        this.errors = [];

        const userType = this.authService.userType
        console.log(userType)
        this.presentLoading();

        // this.loadCrt.

        if(userType == 'user'){
          this.router.navigate(['/home/listing']);
        } if(userType == 'vendor'){
          this.router.navigate(['/vdash/vlist']);
        }  if(userType == 'admin'){
          this.router.navigate(['/main/advendor']);
        }


      },
      error: err => {
        this.errors[0] = err.message;
        console.log(err)
      }
    });
    

  }

  checkMessage() {
    this.route.queryParams.subscribe(params => {
      params['message'] ? this.message = params['message'] : null;

      this.toast.logToast(this.message)

      setTimeout(() => {
        this.router.navigate([], {
          replaceUrl: true,
          queryParams: { message: null },
          queryParamsHandling: 'merge'
        });

      }, 2000);
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
