import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart() {
    return [{
      name: 'Support engineers',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: ' Microservices',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Logs',
      data: [163, 203, 276, 408, 547, 729, 628]
    }];
  }
  
  cards() {
    return [71, 78, 39, 66];
  }

  
}
