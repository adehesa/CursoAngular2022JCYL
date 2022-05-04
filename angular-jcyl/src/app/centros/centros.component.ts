import { CentrosService } from './../centros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {


  centro: any
  constructor(private centrosService: CentrosService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((parametros: ParamMap) => {
      this.centro = {centro: parametros.get("nombre"), horario: parametros.get("horario")}
    })
  }

  ngOnInit(): void {
  }

}
