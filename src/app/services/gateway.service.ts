import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gateway } from '../models/gateway.model';

const baseUrl = 'http://localhost:3000/api/gateways';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Gateway[]> {
    return this.http.get<Gateway[]>(baseUrl, {
      params: {
        filter: `{"include": "devices"}`
      }
    });
  }

  get(id: any): Observable<Gateway> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


  findByName(name: any): Observable<Gateway[]> {
    return this.http.get<Gateway[]>(`${baseUrl}`, {
      params: {
        filter: `{"include": "devices", "where": {"name": "${name}"}}`
      }
    });
  }
}
