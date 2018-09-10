import { Injectable } from '@angular/core';
import axios from 'axios';
import { initialQueryString, shouldFetchData } from '../lib/util';
import { environment } from '../environments/environment';
import { ErrorService } from './error.service';
import { AsyncResponse } from './AsyncResponse';
import * as moment from 'moment';
import { Medicine } from './medicines-menu/Medicine';
import { Emergencie } from './natural-emergencies/Emergencie';

@Injectable()
export class DatosService {
  validMedicinesLastFetchMoment: moment.Moment = moment();
  validMedicines: Array<Medicine>;
  invalidMedicinesLastFetchMoment: moment.Moment = moment();
  invalidMedicines: Array<Medicine>;
  naturalEmergenciesLastFetchMoment: moment.Moment = moment();
  naturalEmergencies: Array<Emergencie>;
  constructor(private errorService: ErrorService) { }

  async loadValidMedicineData() {
    try {
      if (!shouldFetchData(this.validMedicinesLastFetchMoment, this.validMedicines)) {
        return new AsyncResponse(true, this.validMedicines, '', true);
      }
      const queryString = initialQueryString() + '&$limit=10';
      const url = environment.datos.medicamentosVigentes.url + queryString;
      const data = await axios.get(url);
      this.validMedicines = data.data;
      this.validMedicinesLastFetchMoment = moment();
      return new AsyncResponse(true, this.validMedicines, '', false);
    }
    catch (ex) {
      console.log('** error fetching data!');
      this.errorService.logErrorInDb(ex);
      return new AsyncResponse(false, '', 'Ocurrió un error al consultar datos de medicinas vigentes.', false);
    }
  }
  async loadInvalidMedicineData() {
    try {
      if (!shouldFetchData(this.invalidMedicinesLastFetchMoment, this.invalidMedicines)) {
        return new AsyncResponse(true, this.invalidMedicines, '', true);
      }
      const queryString = initialQueryString() + '&$limit=10';
      const url = environment.datos.medicamentosVencidos.url + queryString;
      const data = await axios.get(url);
      this.invalidMedicines = data.data;
      this.invalidMedicinesLastFetchMoment = moment();
      return new AsyncResponse(true, this.invalidMedicines, '', false);
    }
    catch (ex) {
      console.log('** error fetching data!');
      this.errorService.logErrorInDb(ex);
      return new AsyncResponse(false, '', 'Ocurrió un error al consultar datos de medicinas vencidas.', false);
    }
  }
  async loadNaturalEmergencies() {
    try {
      if (!shouldFetchData(this.naturalEmergenciesLastFetchMoment, this.naturalEmergencies)) {
        return new AsyncResponse(true, this.naturalEmergencies, '', true);
      }
      const queryString = initialQueryString() + '&$limit=10';
      const url = environment.datos.emergenciasNaturales.url + queryString;
      const data = await axios.get(url);
      this.naturalEmergencies = data.data;
      this.naturalEmergenciesLastFetchMoment = moment();
      return new AsyncResponse(true, this.naturalEmergencies, '', false);
    }
    catch (ex) {
      console.log('** error fetching data!');
      this.errorService.logErrorInDb(ex);
      return new AsyncResponse(false, '', 'Ocurrió un error al consultar datos de emergencias naturales', false);
    }
  }
}
