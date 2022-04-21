import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { map } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items$ = new BehaviorSubject<CartItem[]>([ ]);
  URL: string = `http://localhost:3001/api/v1/carts`

  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {

    let errors = [{ status: 'Error', message: ' Ooops, someting went wrong!' }];
    let msg = ' Ooops, someting went wrong!'
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      // msg = error.error.message ? error.error.message:error.error.text
      // errors = error.error
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
     
      msg = error.error.message ? error.error.message:error.error.text
        errors = error.error
    }
    // Return an observable with a user-facing error message.
    // return throwError(errors);
    console.log('service error:',error.error)
    return throwError(() => new Error(msg))
  }

  
  // getCart() {
  //   return this.items$.asObservable();
  // }
  getCart() {
    return this.http.get(`${this.URL}/`)
    .pipe(
      map(data => {
        return data;
      }), catchError(this.handleError));
  }

  // addToCart(newItem: CartItem) {
  //   this.items$.next([... this.items$.getValue(), newItem]);
  // }

  addToCart(id: Number) {
    return this.http.post(`${this.URL}/`,{})
    .pipe(
      map(data => {
        return data;
      }), catchError(this.handleError));
  }

  removeItem(id: number) {

    const deleteId = this.items$.getValue().findIndex((item )=> item.id === id);
    this.items$.getValue().splice(deleteId,1);
  }

  changeQty(quantity: number, id: number) {
    const items = this.items$.getValue();
    const index = items.findIndex(item => item.id === id);
    items[index].quantity += quantity;
    this.items$.next(items);
  }

  getTotalAmount() {
    return this.items$.pipe(
      map((items) => {
        let total = 0;
        items.forEach((item) => {
          total += item.quantity * item.price;
        });

        return total;
      })
    );
  }
}
