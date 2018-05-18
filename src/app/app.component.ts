import { Component } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showSpinner = false;
  testData: Array<Object>;
  async cargarDatos() {
    try {
      const url = 'https://www.datos.gov.co/resource/wqeu-3uhz.json?$limit=10&$$app_token=' + environment.soda.appToken;
      console.log(url);
      const data = await axios.get(url);
      console.log(data.data);
      this.testData = data.data;
    }
    catch (ex) {
      console.log('** error fetching data!');
      console.log(ex);
    }
  }
}
