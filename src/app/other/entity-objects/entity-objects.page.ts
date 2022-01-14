import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';
import { TypeService } from '../../service/type.service';
//import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-entity-objects',
  templateUrl: './entity-objects.page.html',
  styleUrls: ['./entity-objects.page.scss'],
})
export class EntityObjectsPage implements OnInit {
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  allTypes: any = [];
  constructor(
    private typeService: TypeService,
    private alertController: AlertController
  ) { }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }


  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }

  ngOnInit() {

  }
  ionViewWillEnter() {
    this.allTypes = this.typeService.readAll();
  }

  addItem() {
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-2',
      header: 'Add New type!',
      // message: 'Message <strong>text</strong>!!!',
      inputs: [
        {
          name: 'typeName',
          type: 'text',
          placeholder: 'Enter Type Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: (data) => {
            console.log('Confirm Okay',data);
            this.addTypeApi(data.typeName)
          }
        }
      ]
    });

    await alert.present();
  }

  addTypeApi(name){
    if(name){
      this.typeService.addNew(name);
    }
    this.allTypes = this.typeService.readAll();
  }
  deleteType(t){
    if(t){
      this.typeService.deleteType(t);
    }
    this.allTypes = this.typeService.readAll();
      //deleteType
  }
}


