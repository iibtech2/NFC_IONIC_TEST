import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntityObjectsPageRoutingModule } from './entity-objects-routing.module';

import { EntityObjectsPage } from './entity-objects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntityObjectsPageRoutingModule
  ],
  declarations: [EntityObjectsPage]
})
export class EntityObjectsPageModule {}
