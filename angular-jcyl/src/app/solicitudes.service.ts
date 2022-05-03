import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SolicitudesService {
  private listaSolicitudes: any = [{nombre: "Nombre Inicial por Servicio", apellidos: "Apellidos Inicial por Servicio"}];

  constructor() { }

  getSolicitudes() : []  {
    return this.listaSolicitudes;
  }

  addSol(sol: any) {
    this.listaSolicitudes.push(sol);
  }
}


