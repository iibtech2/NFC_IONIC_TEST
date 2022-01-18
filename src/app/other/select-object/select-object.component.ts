import { EntityService } from './../../service/entity.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-object',
  templateUrl: './select-object.component.html',
  styleUrls: ['./select-object.component.scss'],
})
export class SelectObjectComponent implements OnInit {


  allObjects:any = [];
  constructor(
    private entityService: EntityService,
    private alertController: AlertController,
    public mdl:ModalController
  ) { }

  ngOnInit() {}

  closeModel(){
    this.mdl.dismiss();
  }

 
    async selectOption() {
      const alert = await this.alertController.create({
        cssClass: 'alertheader',
        header: 'Confirm!',
        message: 'Message <strong>text</strong>!!!',
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
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]
      });
  
      await alert.present();
    }
  ionViewWillEnter() {
    this.allObjects = this.entityService.readAll();
  } 
}
