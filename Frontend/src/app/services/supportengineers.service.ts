import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportengineersService {

  private baseUrl = 'http://localhost:8090/s-e/get-all';
  

  constructor(private http: HttpClient) { }

  getEngineer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEngineer(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  deleteEngineer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEngineerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
