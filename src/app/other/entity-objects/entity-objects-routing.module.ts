import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityObjectsPage } from './entity-objects.page';

const routes: Routes = [
  {
    path: '',
    component: EntityObjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntityObjectsPageRoutingModule {}
