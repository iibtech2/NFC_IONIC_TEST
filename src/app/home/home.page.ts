import { ToastServiceService } from './../service/toast-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController, PopoverController } from '@ionic/angular';
import { MorePopoverComponent } from '../other/more-popover/more-popover.component';
import { SelectObjectComponent } from '../other/select-object/select-object.component';
import { AlertOpenComponent } from '../other/alert-open/alert-open.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;

  isWritingMode = false;
  writingObject: any;
  constructor(
    private popoverController: PopoverController,
    private alertController: AlertController,
    private toast: ToastServiceService,
    private mdl: ModalController
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
  ionViewWillEnter() {
    // this.presentAlert();
  }

  copyText() {
    this.toast.SuccessToast('Copy Successfully', 2000);
  }


  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  selectData() {
    this.mdl.create({
      component: SelectObjectComponent
    }).then(modelel => {
      modelel.present();
      return modelel.onDidDismiss();
    }).then(resultdata => {
      if (resultdata.role == 'ok') {
        this.isWritingMode = true;
        this.writingObject = resultdata.data
        this.selectOption();
      }
    });
  }

  selectOption() {
    this.mdl.create({
      component: AlertOpenComponent,
      cssClass: 'alert_show',
      backdropDismiss: false
    }).then(modelel => {
      modelel.present();
      return modelel.onDidDismiss();
    }).then(resultdata => {

        this.cancelWrite();

    });
  }

  cancelWrite() {
    this.isWritingMode = false;
    this.writingObject = null;
  }
}
//
