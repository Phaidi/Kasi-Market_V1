import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Food } from 'src/app/models/food.model';
import { handleError } from 'src/app/helpers/extractErrors';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  URL: string = `https://kasi-market.herokuapp.com/api/v1/wishes`

  constructor(private http:HttpClient) { }

  public getMyWishes(): Observable<Food[]> {
    return this.http.get<Food[]>(`${this.URL}/`)
      .pipe(
        map(data => {
          return data;
        }), catchError(handleError));
       
  }

  public makeWish(body : any): Observable<Food[]> {
    return this.http.post<Food[]>(`${this.URL}/`,body)
      .pipe(
        map(data => {
          return data;
        }), catchError(handleError));
       
  }

  removeItem(id: number) {
    return this.http.delete(`${this.URL}/`+ id)
    .pipe(
      map(data => data), catchError(handleError));
    }

    moveToCart(data: any) {
      return this.http.post(`${this.URL}/moveToCart/`, data)
      .pipe(
        map(data => data), catchError(handleError));
      }


  // public getMyOrders(): Observable<Food[]> {
  //   return this.http.get<Food[]>(`${this.URL}/myOrders`)
  //     .pipe(
  //       map(data => {
  //         return data;
  //       }), catchError(handleError));
  // }

  // public createOrder(id, formBody): Observable<Food> {
  //   return this.http.post<Food>(`${this.URL}/${id}`, formBody)
  //     .pipe(
  //       map(data => {
  //         return data;
  //       }),
  //       catchError(this.handleError));
  // }

  // public getIterm(id: Number): Observable<Food> { // cart ID is being sent
  //   return this.http.get<Food>(`${this.URL}/`+id)
  //   .pipe(
  //     map(data => {
  //       return data;
  //     }), catchError(this.handleError));

  // }
}
