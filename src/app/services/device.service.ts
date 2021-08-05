import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

const baseUrl = 'http://localhost:3000/api/devices';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Device[]> {
    return this.http.get<Device[]>(baseUrl);
  }

  get(id: any): Observable<Device> {
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


  findByVendor(vendor: any): Observable<Device[]> {
    return this.http.get<Device[]>(`${baseUrl}`, {
      params: {
        filter: `{"where": {"vendor": "${vendor}"}}`
      }
    });
  }
}
