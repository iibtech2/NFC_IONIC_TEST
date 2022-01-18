import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, AlertController, ModalController } from '@ionic/angular';
import { EntityService } from 'src/app/service/entity.service';
import { TypeService } from '../../service/type.service';
import { DetailsObjectComponent } from '../details-object/details-object.component';
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
  allEntities:any = [];
  constructor(
    private entityService: EntityService,
    private typeService: TypeService,
    private alertController: AlertController,
    private mdlCtrl: ModalController
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
    this.allEntities = this.entityService.readAll();
  } 

  async addType() {
    const alert = await this.alertController.create({
      cssClass: 'add-type-alert',
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

  addItem(){
    this.mdlCtrl.create({
      component: DetailsObjectComponent
    }).then(modelel => {
      modelel.present();
      return modelel.onDidDismiss();
    }).then(resultdata => {
      this.ionViewWillEnter() 
    });
  }
  deleteItem(t){
    if(t){
      this.entityService.deleteType(t);
    }
    console.log(t);
    this.allEntities = this.entityService.readAll();
  }


}


