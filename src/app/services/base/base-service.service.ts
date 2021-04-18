import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {
  baseURL: string;

  constructor(public httpClient: HttpClient) {
    this.baseURL = `${environment.url}`;
  }


  save(endpoint?: string, data?: any) {
    console.log(endpoint, data)
    return this.httpClient.post(`${this.baseURL}/${endpoint}`, data);
  }

}
