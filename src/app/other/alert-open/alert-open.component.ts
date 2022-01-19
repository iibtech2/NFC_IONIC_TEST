import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-open',
  templateUrl: './alert-open.component.html',
  styleUrls: ['./alert-open.component.scss'],
})
export class AlertOpenComponent implements OnInit {


  constructor(
    private mdlCtrl: ModalController
  ) { }

  ngOnInit() {}


  closeModel(){
    this.mdlCtrl.dismiss();
  }
}
