import { Component, OnInit } from '@angular/core';
import { datosBancarios } from './datosBancarios';
import {FormControl, NgForm} from '@angular/forms';

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
    console.log(f.form);
    console.log(f.value);
    if (f.form.controls["dc"].errors) {
      //nunca va a llegar aqui porque en button existe [disabled]="!f.form.valid"
      console.log("DC tiene errores", f.form.controls["dc"].errors);
    }
    this.submited = true;
  }



}
