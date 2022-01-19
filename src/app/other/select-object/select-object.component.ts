import { EntityService } from './../../service/entity.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertOpenComponent } from '../alert-open/alert-open.component';

@Component({
  selector: 'app-select-object',
  templateUrl: './select-object.component.html',
  styleUrls: ['./select-object.component.scss'],
})
export class SelectObjectComponent implements OnInit {


  selectOptionValue:any = null
  allObjects:any = [];
  constructor(
    private entityService: EntityService,
    private mdl: ModalController,
  ) { }

  ngOnInit() {}

  closeModel(){
    this.mdl.dismiss();
  }

  selectOption(){
    this.mdl.dismiss(this.allObjects[this.selectOptionValue],'ok')
  }


  ionViewWillEnter() {
    this.allObjects = this.entityService.readAll();
  }
}
