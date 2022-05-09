import { Component, OnInit } from '@angular/core';
import { datosBancarios } from './datosBancarios';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-datos-bancarios',
  templateUrl: './datos-bancarios.component.html',
  styleUrls: ['./datos-bancarios.component.css']
})


export class DatosBancariosComponent implements OnInit {

  model: datosBancarios = new datosBancarios()
  submited : boolean = false

  f: FormGroup;
  constructor(private formsBuilder: FormBuilder) {
    this.f = formsBuilder.group({ pais: '', iban: '', entidad: '', sucursal: '', dc: '', cuenta: '', docSel: '', docTxt: '', nombre: '', apellido1: '', apellido2: '' });
  }

  ngOnInit(): void { }

  submit() {
    console.log(this.f.value);
    console.log(this.f.controls["dc"].value);
    console.log(this.f.controls["dc"].errors);
    if (this.f.controls["dc"].errors) {
      //nunca va a llegar aqui porque en button existe [disabled]="!f.valid"
      console.log("DC tiene errores", this.f.controls["dc"].errors);
    }
    this.submited = true;
  }






}
