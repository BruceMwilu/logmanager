import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MservicesRoutingModule } from './mservices-routing.module';
import { MicroservicesComponent } from './microservices.component';
import { MicroservicesListComponent } from './microservices-list/microservices-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
   MicroservicesComponent,
   MicroservicesListComponent
  ],
  imports: [
    CommonModule,
    MservicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
  ]
})
export class MservicesModule { }
