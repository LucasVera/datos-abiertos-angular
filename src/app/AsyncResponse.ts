export class AsyncResponse {
  success: boolean;
  data: any;
  error: string;
  fromCache: boolean;

  constructor(success: boolean, data: any, error: string, fromCache: boolean) {
    this.success = success;
    this.data = data;
    this.error = error;
    this.fromCache = fromCache;
  }
}
