import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatusErrorMessages } from './interfaces/http-status-error-messages.model';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EtalyticsConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(protected httpClient: HttpClient, protected config: EtalyticsConfig) {}

  protected createErrorHandler(catchAllMessage: string, additionalHttpStatusErrors: HttpStatusErrorMessages = []) {
    // show-hide spinner or snackbar based on status code

    return (response: HttpErrorResponse) => {
      if (!response.error) {
        console.error('Unknown AJAX error.');
      } else if (response.error instanceof ErrorEvent) {
        console.error('An error occurred:', response.error.message);
      } else if (response.error.error && response.error.error instanceof SyntaxError) {
        console.error('A syntax error occurred:', response.error.error.message);
      } else {
        // The backend returned an unsuccessful response code.

        if (response.status === 401) {
          // auth scenario
        } else {
          const additionalErrorMessage = additionalHttpStatusErrors[response.status];
          const message = additionalErrorMessage ? additionalErrorMessage : catchAllMessage;
          console.log(`OK...${message}`);
        }
      }
      return throwError(response);
    };
  }
}
