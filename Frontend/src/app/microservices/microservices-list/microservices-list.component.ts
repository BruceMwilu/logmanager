import { Component, OnInit } from '@angular/core';
import { Micro } from 'src/app/micro';
import { MicroservicesService } from 'src/app/services/microservices.service';

@Component({
  selector: 'app-microservices-list',
  templateUrl: './microservices-list.component.html',
  styleUrls: ['./microservices-list.component.css']
})
export class MicroservicesListComponent implements OnInit {
  micro!: Micro[];
  displayedColumns: string[] = ['Id', 'name'];

  constructor(private microservice: MicroservicesService) {

  }

  //Get all Micros
  getAllMicros() {
    return this.microservice.getMicroserv().subscribe(
      (response) => {
        this.micro = response;
      }
    )
  }

  ngOnInit(): void {
    this.getAllMicros();
  }

}
