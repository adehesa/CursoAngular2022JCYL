import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input() centro: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
