import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadToastService {

    constructor(private toastCtrl: ToastController, public loadingController: LoadingController) {

    }

    async logToast(msg) {

        console.log("im in")
        const toast = await this.toastCtrl.create({
            message: msg,
            mode: 'ios',
            duration: 1000,
            position: 'middle',
        });

        toast.present();
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

