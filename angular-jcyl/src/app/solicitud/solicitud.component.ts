import { SolicitudesService } from './../solicitudes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud : any
  constructor(private solicitudesService: SolicitudesService) {
  }

  ngOnInit(): void {
  }

  getSolicitudes() {
    this.solicitud = this.solicitudesService.getSolicitudes().then((x: any) => this.solicitud = x);
  }
}
