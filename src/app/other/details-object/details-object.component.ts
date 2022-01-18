import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EntityService } from 'src/app/service/entity.service';
import { TypeService } from 'src/app/service/type.service';

@Component({
  selector: 'app-details-object',
  templateUrl: './details-object.component.html',
  styleUrls: ['./details-object.component.scss'],
})
export class DetailsObjectComponent implements OnInit {

  allTypes:any = [];
  frmEntity = {
    eName : '',
    eType : ''
  }
  constructor(
    private mdlCtrl: ModalController,
    private typeService: TypeService,
    private entService: EntityService
  ) { }

  ngOnInit() {}

  closeModel(){
    this.mdlCtrl.dismiss();
  }

  ionViewWillEnter() {
    this.allTypes = this.typeService.readAll();
  }

  onSubmit(){
   let frmData = {
    eName : this.frmEntity.eName,
    eType : this.allTypes[this.frmEntity.eType]
   }
    this.entService.addNew(frmData);
    this.mdlCtrl.dismiss('','ok');
  }
}
