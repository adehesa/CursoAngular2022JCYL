import { Component, OnInit } from '@angular/core';
import { datosBancarios } from './datosBancarios';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})


export class DatosBancariosComponent implements OnInit {

  model: datosBancarios = new datosBancarios()
  submited : boolean = false
  constructor() {  }

  ngOnInit(): void { }

  submit(f: NgForm) {
    console.log(f.value);
    this.submited = true;
  }



}
