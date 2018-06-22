import { Component } from '@angular/core';
import { DatosService } from './datos.service';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DatosService, ErrorService ]
})
export class AppComponent {
  title = 'app';
}
