import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Microservices } from 'src/app/microservices';
import { MicroservicesService } from 'src/app/services/microservices.service';

@Component({
  selector: 'app-microservices-list',
  templateUrl: './microservices-list.component.html',
  styleUrls: ['./microservices-list.component.css']
})
export class MicroservicesListComponent implements OnInit {

  microservices: Observable<Microservices[]> | undefined;

  constructor(private microService: MicroservicesService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.microservices = this.microService.getMicroservlist();
  }
}
