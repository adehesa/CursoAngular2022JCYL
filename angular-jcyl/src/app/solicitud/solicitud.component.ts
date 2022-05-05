import { SolicitudesService } from './../solicitudes.service';
import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';


@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: any;
  constructor(private solicitudesService: SolicitudesService) {
    this.solicitud = this.solicitudesService.getSolicitudes()
  }

  ngOnInit(): void {
  }

}
