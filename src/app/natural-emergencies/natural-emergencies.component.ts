import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Emergencie } from './Emergencie';
import { AsyncResponse } from '../AsyncResponse';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-natural-emergencies',
  templateUrl: './natural-emergencies.component.html',
  styleUrls: ['./natural-emergencies.component.css']
})
export class NaturalEmergenciesComponent implements OnInit {
  errorMsg = '';
  naturalEmergencies: Array<Emergencie>;
  constructor(private datosService: DatosService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.fillNaturalEmergenciesData();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  async fillNaturalEmergenciesData() {
    this.spinner.show();
    const response: AsyncResponse = await this.datosService.loadNaturalEmergencies();
    const { success, data, error } = response;
    if (success && data && Array.isArray(data)) {
      this.naturalEmergencies = data;
    }
    else if (error) {
      this.errorMsg = error;
    }
    else {
      this.errorMsg = 'Error inesperado al cargar datos de medicinas vigentes.';
    }
    this.spinner.hide();
  }

}
