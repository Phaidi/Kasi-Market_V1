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
export class OrdersService {

  URL: string = `https://kasi-market.herokuapp.com/api/v1/orders`

  constructor(private http: HttpClient) { }

  getOrders():Observable<any> {

    return this.http.get<any>(`${this.URL}/`)
    .pipe(
      map(data => {
        return data
      }), catchError(handleError));
  }

}
