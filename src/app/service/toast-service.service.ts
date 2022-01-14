import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(
    public toastController: ToastController
  ) { }

  async presentToast(message, duration) {
    const toast = await this.toastController.create({
      message: message,
      duration:duration,
      buttons: [
        {
          side: 'end',
          icon: 'checkmark-done',
          // text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async SuccessToast(msg: string, durationMs: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: durationMs,
      cssClass: 'successToast',
      buttons: [
        {
          side: 'start',
          icon: 'checkmark',
          // text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async ErrorToast(msg: string, durationMs: number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: durationMs,
      cssClass: 'failedToast',
      buttons: [
        {
          side: 'start',
          icon: 'bug',
          // text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
