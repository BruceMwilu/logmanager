import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seng } from '../seng';

@Injectable({
  providedIn: 'root'
})
export class SupportengineersService {

  private baseUrl = 'http://localhost:8090/s-e';
  

  constructor(private http: HttpClient) { }

  

  createEngineer(value: Seng): Observable<HttpResponse<Seng>> {
    return this.http.post<Seng>(`${this.baseUrl}/create`,value, {observe: "response"} );
  }

  deleteEngineer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEngineerList(): Observable<Array<Seng>> {
    return this.http.get<Array<Seng>>(`${this.baseUrl}/getall`);
  }
}
