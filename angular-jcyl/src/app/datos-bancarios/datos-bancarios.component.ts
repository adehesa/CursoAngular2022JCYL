import { Component, OnInit } from '@angular/core';
import { datosBancarios } from './datosBancarios';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})


export class DatosBancariosComponent implements OnInit {

  model: datosBancarios = new datosBancarios();

  constructor() { }

  ngOnInit(): void { }

  submit(f: NgForm) {
    console.log(f.value);
    console.log(f.value.pais)
    console.log(this.model.pais)
  }



}
