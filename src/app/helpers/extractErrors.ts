import {HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';

export const handleError =(error: HttpErrorResponse) => {

    let errors: any = [{ status: 'Error', message: ' Ooops, someting went wrong!' }];

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // msg = error.error.message ? error.error.message:error.error.text
      // errors = error.error
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      errors.message = error.error.message ? error.error.message:error.error.text;
        errors = error.error;
        
    }
    // Return an observable with a user-facing error message.
    return throwError(errors);
  
  }