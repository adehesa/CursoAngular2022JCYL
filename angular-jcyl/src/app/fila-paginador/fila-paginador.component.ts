import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fila-paginador',
  templateUrl: './fila-paginador.component.html',
  styleUrls: ['./fila-paginador.component.css']
})
export class FilaPaginadorComponent implements OnInit {

  @Input() solicitud: any = null;
  @Output() evtEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  delSol(sol: any) {
    this.evtEmitter.emit(sol);
  }

}
