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
export class AddressService {

  URL: string = `http://localhost:3000/api/v1/addresses`
  
  constructor(private http: HttpClient) { }

  getAddress():Observable<Address> {

    return this.http.get<Address>(`${this.URL}/`)
    .pipe(
      map(data => {
        return data
      }), catchError(handleError));
  }

  public createAddress(data: any): Observable<Address> {
    return this.http.post<Address>(`${this.URL}/`,data)
      .pipe(
        map(data => {
          return data;
        }), catchError(handleError));
       
  }
}
