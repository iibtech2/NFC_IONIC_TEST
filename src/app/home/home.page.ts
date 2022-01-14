import { ToastServiceService } from './../service/toast-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, PopoverController } from '@ionic/angular';
import { MorePopoverComponent } from '../other/more-popover/more-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  constructor(
    private popoverController: PopoverController,
    private alertController: AlertController,
    private toast:ToastServiceService
  ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MorePopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'NFC Disabled',
      message: 'Please Enable NFC and Press OK',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ionViewWillEnter(){
    // this.presentAlert();
  }

  copyText(){
    this.toast.SuccessToast('Copy Successfully', 2000);
  }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
