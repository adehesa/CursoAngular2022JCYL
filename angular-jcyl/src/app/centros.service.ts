import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentrosService {

  constructor() { }

  getCentro(c: any, h: any) : any  {
    return {centro: c.nombre, horario: c.horario }
  }
}
