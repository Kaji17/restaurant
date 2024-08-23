import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UtilisService {

  messageError: string = '';

  getMess(): string {
    return this.messageError;
  }

  constructor() {}

  // RECUPERATION DU STATUT DE LA REQUETTE
  response(data: any, cb?: any) {
    let statuscode = data.statusCodeValue;
    switch (statuscode) {
      case 200: {
        if (cb) {
          cb(data.body);
        }
        break;
      }
      case 201: {
        if (cb) {
          cb(data.body);
        }
        break;
      }
      case 401: {
        if (cb) {
          cb(data);
        } else {
          this.messageError = 'Unauthorized';
        }

        break;
      }
      case 403: {
        if (cb) {
          cb(data);
        } else {
          this.messageError = 'Forbidden';
        }

        break;
      }
      case 404: {
        if (cb) {
          cb(data);
        } else {
          this.messageError = 'Not Found';
        }

        break;
      }
      default: {
        if (cb) {
          cb(data);
        } else {
          this.messageError = 'Serveur Innacessible';
        }
        break;
      }
    }
  }
}
