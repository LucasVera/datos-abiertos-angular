import { Component, OnInit } from '@angular/core';
import { Medicine } from './Medicine';
import { DatosService } from '../datos.service';
import { AsyncResponse } from '../AsyncResponse';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-medicines-menu',
  templateUrl: './medicines-menu.component.html',
  styleUrls: ['./medicines-menu.component.css']
})
export class MedicinesMenuComponent implements OnInit {
  validMedicines: Array<Medicine>;
  invalidMedicines: Array<Medicine>;
  validMedicinesError = '';
  invalidMedicinesError = '';
  constructor(private datosService: DatosService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.fillValidMedicineData();
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  async fillValidMedicineData() {
    this.spinner.show();
    const asyncResponse: AsyncResponse = await this.datosService.loadValidMedicineData();
    const { success, data, error } = asyncResponse;
    if (success && data && Array.isArray(data)) {
      this.validMedicines = data;
    }
    else if (error) {
      this.validMedicinesError = error;
    }
    else {
      this.validMedicinesError = 'Error inesperado al cargar datos de medicinas vigentes.';
    }
    this.spinner.hide();
  }

  async fillInvalidMedicineData() {
    this.spinner.show();
    const asyncResponse: AsyncResponse = await this.datosService.loadInvalidMedicineData();
    const { success, data, error } = asyncResponse;
    if (success && data && Array.isArray(data)) {
      this.invalidMedicines = data;
    }
    else if (error) {
      this.invalidMedicinesError = error;
    }
    else {
      this.invalidMedicinesError = 'Error inesperado al cargar datos de medicinas vencidas.';
    }
    this.spinner.hide();
  }

}
