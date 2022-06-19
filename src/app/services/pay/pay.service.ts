import { Injectable } from '@angular/core';
import { handleError } from 'src/app/helpers/extractErrors';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../models/cart-item.model';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Address } from 'src/app/models/address';


@Injectable({
  providedIn: 'root'
})
export class PayService {

  URL: string = `http://localhost:3000/api/v1/payments`

  constructor(private http: HttpClient) { }

  public checkOut(data: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/${data.amount}`,data)
      .pipe(
        map(data => {
          return data;
        }), catchError(handleError));
       
  }
}
