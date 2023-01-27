import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportengineerListComponent } from './supportengineer-list/supportengineer-list.component';

import { SupportengineerComponent } from './supportengineer.component';

const routes: Routes = [
  {
    path: 'create',
    component: SupportengineerComponent
  },
  {
    path: 'list',
    component: SupportengineerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SengineersRoutingModule { }
