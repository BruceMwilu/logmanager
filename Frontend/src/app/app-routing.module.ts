import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { MicroservicesComponent } from './microservices/microservices.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'supportengineer',
    loadChildren: () => import('./supportengineer/sengineers.module').then(m => m.SengineersModule)
  },
  {
    path: 'microservices',
    loadChildren: () => import('./microservices/mservices.module').then(m => m.MservicesModule)
  },
  
  {path: 'logs', component: LogsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
