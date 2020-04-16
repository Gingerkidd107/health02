import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialCollectionPage } from './initial-collection.page';

const routes: Routes = [
  {
    path: '',
    component: InitialCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialCollectionPageRoutingModule {}
