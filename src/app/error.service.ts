import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() { }
  logErrorInDb(error) {
    console.error(error);
  }
}
