import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroservicesListComponent } from './microservices-list/microservices-list.component';
import { MicroservicesComponent } from './microservices.component';


const routes: Routes = [
  {
    path: 'created',
    component: MicroservicesComponent
  },
  {
    path: 'listed',
    component: MicroservicesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MservicesRoutingModule { }
