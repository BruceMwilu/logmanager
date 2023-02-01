import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import { MicroservicesService } from '../services/microservices.service';
import { Micro } from '../micro';


@Component({
  selector: 'app-microservices',
  templateUrl: './microservices.component.html',
  styleUrls: ['./microservices.component.css']
})
export class MicroservicesComponent implements OnInit {

  Microform!: FormGroup;
  submitted = false


  constructor(private fb: FormBuilder, private dataService: MicroservicesService, private router: Router, private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.Microform = this.fb.group({
      name: ['', Validators.required] 
    });
  }
  

  submit() {

    const micro: Micro= {
      name: this.Microform.value['name'],
      }
      
 
    this.dataService.createMicroserv(micro).subscribe(
      response => {
        if (response.status == 200){
          this.toastr.success("Success!")

        }
        }
      );
  }
   
}


