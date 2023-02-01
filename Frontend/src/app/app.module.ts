import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule } from '@angular/material/table'
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './widgets/area/area.component';
import { PieComponent } from './widgets/pie/pie.component';
import { CardComponent } from './widgets/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    LogsComponent,
    SublevelMenuComponent,
    AreaComponent,
    PieComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      preventDuplicates: true
    }),
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HighchartsChartModule,
    MatCardModule,
    Ng2SearchPipeModule, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

