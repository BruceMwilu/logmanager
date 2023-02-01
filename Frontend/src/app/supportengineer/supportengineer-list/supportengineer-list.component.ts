import { Component, OnInit } from '@angular/core';
import { Seng } from 'src/app/seng';
import { SupportengineersService } from 'src/app/services/supportengineers.service';


@Component({
  selector: 'app-supportengineer-list',
  templateUrl: './supportengineer-list.component.html',
  styleUrls: ['./supportengineer-list.component.css']
})
export class SupportengineerListComponent implements OnInit {

  seng!: Seng[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailAddress'];

  constructor(private seservice: SupportengineersService) {

  }

  getAllEngineers() {
    return this.seservice.getEngineerList().subscribe(
      (response) => {
        this.seng = response;
      }
    )
  }

  ngOnInit(): void {
    this.getAllEngineers();
  }

}
