import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MicroservicesService {

  private baseUrl = 'http://localhost:8090/micro-services/create';


  constructor(private http: HttpClient) { }

  getMicroserv(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createMicroserv(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  deleteMicroserv(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMicroservlist(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
