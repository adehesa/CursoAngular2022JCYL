import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SolicitudesService {

  constructor(private httpClient: HttpClient) { }


  getSolicitudes() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(delay(1000));
  }

}


