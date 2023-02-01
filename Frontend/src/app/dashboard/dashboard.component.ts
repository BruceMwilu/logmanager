import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatPaginator } from '@angular/material/paginator';
import { DashboardService } from './dashboard.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  bigChart: any[] = [];
  cards: any[] = [];
  


  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();

  }


}
