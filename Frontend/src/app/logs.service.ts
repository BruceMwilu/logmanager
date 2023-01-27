import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private baseUrl = 'http://localhost:8090/logs/search-by-value';
  

  constructor(private http: HttpClient) { }

  getLogsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
