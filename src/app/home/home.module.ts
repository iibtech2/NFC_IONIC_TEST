import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MorePopoverComponent } from '../other/more-popover/more-popover.component';
import { AboutUsComponent } from '../comp/about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MorePopoverComponent,AboutUsComponent],
  entryComponents: [MorePopoverComponent,AboutUsComponent]
})
export class HomePageModule {}
