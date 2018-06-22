import { environment } from '../environments/environment';
import * as moment from 'moment';

const FIVE_MINUTES_IN_MILLISECONDS = 5 * 60 * 1000;

export function initialQueryString() {
  return '?$$app_token=' + environment.datos.appToken;
}

export function shouldFetchData(lastFetchMoment, dataArray) {
  if (!lastFetchMoment || !moment.isMoment(lastFetchMoment) || !lastFetchMoment.isValid()) {
    return true;
  }
  if (!dataArray || !Array.isArray(dataArray)) {
    return true;
  }
  const millisecondsPassed = moment().valueOf() - lastFetchMoment.valueOf();
  console.log(`seconds passed: ${millisecondsPassed / 1000}`);
  if (millisecondsPassed > FIVE_MINUTES_IN_MILLISECONDS) {
    return true;
  }
  return false;
}
