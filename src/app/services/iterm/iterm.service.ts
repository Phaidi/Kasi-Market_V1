import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import {User1} from '../../models/user1';
import { Food } from 'src/app/models/food.model';

@Injectable({
  providedIn: 'root'
})
export class ItermService {

  URL: string = `https://kasi-market.herokuapp.com/api/v1/items`

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

  public getAllItems(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.URL}/`)
      .pipe(
        map(data => {
          return data;
        }), catchError(this.handleError));
       
  }

  public getMyOrders(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.URL}/myOrders`)
      .pipe(
        map(data => {
          return data;
        }), catchError(this.handleError));
  }

  
  public listItems(): Observable<any> {
    return this.http.get<any>(`${this.URL}/myItems`)
      .pipe(
        map(data => {
          return data;
        }), catchError(this.handleError));
  }
  public getMyItems(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.URL}/myOrders`)
      .pipe(
        map(data => {
          return data;
        }), catchError(this.handleError));
  }

  public createItem(formBody): Observable<Food> {
    return this.http.post<Food>(`${this.URL}/`, formBody)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError));
  }

  public createOrder(id, formBody): Observable<Food> {
    return this.http.post<Food>(`${this.URL}/${id}`, formBody)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(this.handleError));
  }

  public getIterm(id: Number): Observable<Food> { // cart ID is being sent
    return this.http.get<Food>(`${this.URL}/`+id)
    .pipe(
      map(data => {
        return data;
      }), catchError(this.handleError));

  }

  public getOrder(id): Observable<Food> { // cart ID is being sent
    return;
  }

  public updateOrder(id): Observable<Food> { // cart ID is being sent
    return;
  }

  
  public deleteItem(id): Observable<any> { // cart ID is being sent
    return this.http.delete<any>(`${this.URL}/${id}`)
      .pipe(
        map(data => {
          return data;
        }), catchError(this.handleError));
  }

  public deleteOrder(id): Observable<Food> { // cart ID is being sent
    return this.http.delete<Food>(`${this.URL}/${id}`)
      .pipe(
        map(data => {
          return data;
        }), catchError(this.handleError));
  }
}
