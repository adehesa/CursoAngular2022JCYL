import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros = [{nombre: "Fernando de Rojas", fechaCreacion: new Date('01/02/2018')}, {nombre: "Agustinas", fechaCreacion: new Date('01/12/2015')}];
  centroSeleccionado: any = {};
  centrosFiltrados: any = {};

  constructor() {
    this.centroSeleccionado = {nombre : "", fechaCreacion: ""};
    this.centroFilter("");
  }

  ngOnInit(): void {
  }

  seleccionarCentro(centro: any) {
    this.centroSeleccionado = centro;
  }

  centro(inputEvent: any) {
    if (inputEvent.target.value == "") {
      this.centroSeleccionado = {nombre : "", fechaCreacion: ""};
    }
    this.centroFilter(inputEvent.target.value);

  }

  centroFilter(centroSel: string) {
    this.centrosFiltrados = this.centros.filter(centro =>
      centro.nombre.includes(centroSel));
  }

  existeFechaCreacion() {
    console.log(this.centroSeleccionado.nombre);
    return this.centroSeleccionado.nombre != "";
  }

}
