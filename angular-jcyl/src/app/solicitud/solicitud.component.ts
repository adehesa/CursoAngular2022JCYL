import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  nombre: string = ""
  apellidos: string = ""
  solicitud: any = null
  listaSolicitudes: any = []

  constructor() { }

  ngOnInit(): void {
  }

  addSol() {
    this.solicitud = {nombre: this.nombre, apellidos: this.apellidos}
    this.listaSolicitudes.push(this.solicitud);
    this.nombre = ""
    this.apellidos = ""
  }

  esVacio(valor: string) {
    return valor.length == 0
  }

  setField(evt: any, type: string) {
    if (type == 'N') {
      this.nombre = evt.target.value
    } else if (type == 'A') {
      this.apellidos = evt.target.value
    }
  }

}
