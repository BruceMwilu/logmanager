import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { SupportengineersService } from '../services/supportengineers.service';
import { Supportengineer } from '../supportengineer';

@Component({
  selector: 'app-supportengineer',
  templateUrl: './supportengineer.component.html',
  styleUrls: ['./supportengineer.component.css']
})
export class SupportengineerComponent implements OnInit {

  supportengineer: Supportengineer = new Supportengineer();
  submitted = false;

  constructor(private sengineerService: SupportengineersService,
    private router: Router) { }

  ngOnInit() {
  }

  newSupportengineer(): void {
    this.submitted = false;
    this.supportengineer = new Supportengineer;
  }

  save() {
    this.sengineerService.createEngineer(this.supportengineer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.supportengineer = new Supportengineer;
    //this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

 // gotoList() {
  //  this.router.navigate(['/employees']);
 // }
}
