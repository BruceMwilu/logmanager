import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SengineersRoutingModule } from './sengineers-routing.module';
import { SupportengineerComponent } from './supportengineer.component';
import { SupportengineerListComponent } from './supportengineer-list/supportengineer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SupportengineerComponent,
    SupportengineerListComponent
   
  ],
  imports: [
    CommonModule,
    SengineersRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class SengineersModule { }
