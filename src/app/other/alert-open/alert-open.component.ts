import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-open',
  templateUrl: './alert-open.component.html',
  styleUrls: ['./alert-open.component.scss'],
})
export class AlertOpenComponent implements OnInit {
  @Input('alertType') alertType

  headerString = '';
  //1For Read  : 2: Write   3: Not Supprt  4: Not Enabled
  constructor(
    private mdlCtrl: ModalController
  ) { }

  ngOnInit() { }

ionViewWillEnter(){
  console.log(this.alertType);
  this.headerString = "UnKnown type";
  if(this.alertType == '1' || this.alertType == '2'){
    this.headerString = "Wait For NFC Tag"
  }
}
  closeModel() {
    this.mdlCtrl.dismiss();
  }
}
