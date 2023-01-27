import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MservicesRoutingModule } from './mservices-routing.module';
import { MicroservicesComponent } from './microservices.component';
import { MicroservicesListComponent } from './microservices-list/microservices-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   MicroservicesComponent,
   MicroservicesListComponent
  ],
  imports: [
    CommonModule,
    MservicesRoutingModule,
    FormsModule
  ]
})
export class MservicesModule { }
