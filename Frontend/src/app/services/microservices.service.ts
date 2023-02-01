import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Micro } from '../micro';

@Injectable({
  providedIn: 'root'
})
export class MicroservicesService {
  

  baseUrl = 'http://localhost:8090/micro-services';


  constructor(private http: HttpClient) { }

  getMicroserv(): Observable<Array<Micro>> {
    return this.http.get<Array<Micro>>(`${this.baseUrl}/getall`)
  }
  
  createMicroserv(value: Micro): Observable<HttpResponse<Micro>> {
    return this.http.post<Micro>(`${this.baseUrl}/create`, value, {observe: "response"} );
  }


  deleteMicroserv(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getMicroservlist(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
