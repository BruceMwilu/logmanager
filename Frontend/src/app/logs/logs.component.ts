import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Logs } from '../logs';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  searchText:any;
  
  logs: Observable<Logs[]> | undefined;

  constructor(private logsService: LogsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.logs = this.logsService.getLogsList();
  }

}
