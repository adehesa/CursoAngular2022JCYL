import { Component } from '@angular/core';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jcyl';

  constructor(private route: Router) {

  }

  irToCentro() {
    this.route.navigate(['/centro', '1'])
  }

}

