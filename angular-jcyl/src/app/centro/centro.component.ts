import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  //templateUrl: './centro.component.html',
  template: `
    <div>
      {{centro.txt}}
    <div>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {txt: 'Prueba template embebido'}
  constructor() { }

  ngOnInit(): void {
  }

}
