import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Microservices } from '../microservices';
import { MicroservicesService } from '../services/microservices.service';


@Component({
  selector: 'app-microservices',
  templateUrl: './microservices.component.html',
  styleUrls: ['./microservices.component.css']
})
export class MicroservicesComponent implements OnInit {

  microservices: Microservices = new Microservices();
  submitted = false;

  constructor(private microService: MicroservicesService,
    private router: Router) { }

  ngOnInit() {
  }

  newMicroservice(): void {
    this.submitted = false;
    this.microservices = new Microservices;
  }

  save() {
    this.microService.createMicroserv(this.microservices)
      .subscribe(data => console.log(data), error => console.log(error));
    this.microservices = new Microservices;
   // this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

 // gotoList() {
 ///   this.router.navigate(['/employees']);
 // }

}
