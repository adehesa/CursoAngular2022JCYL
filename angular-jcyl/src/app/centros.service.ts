import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {

  constructor() { }

  getCentros() : any  {
    console.log("llego");
    return {centro: "JCYL", horario: "09:00-18:00" }
  }
}
