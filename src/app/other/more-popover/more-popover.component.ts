import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AboutUsComponent } from 'src/app/comp/about-us/about-us.component';

@Component({
  selector: 'app-more-popover',
  templateUrl: './more-popover.component.html',
  styleUrls: ['./more-popover.component.scss'],
})
export class MorePopoverComponent implements OnInit {

  constructor(
    private mdl: ModalController,
    private popOver: PopoverController
  ) { }

  ngOnInit() {}

  openAboutUs(){
    this.disMiss()
    this.mdl.create({
      component: AboutUsComponent
    }).then(modelel => {
      modelel.present();
      return modelel.onDidDismiss();
    }).then(resultdata => {

    });
  }


  disMiss(){
    this.popOver.dismiss();
  }

 
}
