import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() listaSolicitudes: any = null;


  constructor() { }

  ngOnInit(): void {

  }

  updateList(evt: any) {
    this.listaSolicitudes.forEach((element: any,index: any)=>{
      if(element.nombre==evt.nombre &&
        element.apellidos==evt.apellidos) {
          this.listaSolicitudes.splice(index, 1);
        }
   });
  }

}
