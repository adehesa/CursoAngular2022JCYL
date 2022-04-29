import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros = [{nombre: "Fernando de Rojas"}, {nombre: "Agustinas"}];
  centroSeleccionado: any = {};
  centrosFiltrados: any = {};

  constructor() {
    this.centroSeleccionado = {nombre : ""};
    this.centroFilter("");
  }

  ngOnInit(): void {
  }

  seleccionarCentro(centro: any) {
    this.centroSeleccionado = centro;
  }

  centro(inputEvent: any) {
    this.centroFilter(inputEvent.target.value);
  }

  centroFilter(centroSel: string) {
    this.centrosFiltrados = this.centros.filter(centro =>
      centro.nombre.includes(centroSel));
  }

}
