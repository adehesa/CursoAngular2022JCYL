import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SolicitudesService {

  constructor(private httpClient: HttpClient) { }

  getSolicitudes() : any  {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
      .toPromise();
  }

}


