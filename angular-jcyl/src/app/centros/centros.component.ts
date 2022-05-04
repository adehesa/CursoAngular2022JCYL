import { CentrosService } from './../centros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  centro : any
  constructor(private centrosService: CentrosService) { }

  ngOnInit(): void {
  }

  getCentros() {
    this.centro = this.centrosService.getCentros();
  }

}
