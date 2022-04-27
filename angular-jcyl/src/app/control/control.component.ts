import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  //templateUrl: './control.component.html',
  template: `
    <div>
      {{solicitud.txt}}
    <div>`,
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  solicitud = {txt: 'Prueba template embebido'}
  constructor() { }

  ngOnInit(): void {
  }

}
