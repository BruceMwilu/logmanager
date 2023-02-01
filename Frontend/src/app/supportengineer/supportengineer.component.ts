import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {MatDialogRef} from "@angular/material/dialog"
import { Router } from '@angular/router';
import { SupportengineersService } from '../services/supportengineers.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seng } from '../seng';
import { Micro } from '../micro';

@Component({
  selector: 'app-supportengineer',
  templateUrl: './supportengineer.component.html',
  styleUrls: ['./supportengineer.component.css']
})
export class SupportengineerComponent implements OnInit {

  Sengform!: FormGroup;
  seng!: Seng
  micro!:Micro;
  submitted = false

  constructor(private foorm: FormBuilder, private Seservice: SupportengineersService, private router: Router, private toastr: ToastrService,
    public dialogRef: MatDialogRef<SupportengineerComponent>) {}

  ngOnInit(): void {
    this.Sengform = this.foorm.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      Id: ['', Validators.required]
    });
  }
 
  submit() {

    const seng: Seng= {
      firstName: this.Sengform.value['firstName'],
      lastName: this.Sengform.value['lastName'],
      emailAddress: this.Sengform.value['emailAddress'],
      Id: this.micro
    }
 
    this.Seservice.createEngineer(seng).subscribe(
      response => {

        if (response.status == 201){
          this.toastr.success("Success!")
          this.dialogRef.close();
        }
        },
      error => {
      this.toastr.error("SupportEngineer  could not be created please try again")
      }
      );
  }
}
