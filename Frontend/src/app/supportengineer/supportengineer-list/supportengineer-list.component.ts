import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SupportengineersService } from 'src/app/services/supportengineers.service';
import { Supportengineer } from 'src/app/supportengineer';

@Component({
  selector: 'app-supportengineer-list',
  templateUrl: './supportengineer-list.component.html',
  styleUrls: ['./supportengineer-list.component.css']
})
export class SupportengineerListComponent implements OnInit {

  supportengineers: Observable<Supportengineer[]> | undefined;

  constructor(private supportengineerservice: SupportengineersService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.supportengineers = this.supportengineerservice.getEngineerList();
  }

}
