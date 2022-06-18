import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { handleError } from 'src/app/helpers/extractErrors';
import { Food } from 'src/app/models/food.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User1 } from 'src/app/models/user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL: string = `http://localhost:3000/api/v1/users`

  constructor(
    private http: HttpClient,
  ) { }

  public getMe(): Observable<User1> {
    return this.http.get<User1>(`${this.URL}/me`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }

  public getVendorRequests(): Observable<User1> {
    return this.http.get<User1>(`${this.URL}/vendors`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }

  public getAllUsers(): Observable<User1> {
    return this.http.get<User1>(`${this.URL}/users`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }

  public getAllVenmdors(): Observable<User1> {
    return this.http.get<User1>(`${this.URL}/getAllvendors`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }


  public acceptVendorShip(id: any): Observable<User1> {
    return this.http.patch<User1>(`${this.URL}/acceptVendor/${id}`,{})
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }
  
  public deleteUserAcc(id: any): Observable<User1> {
    return this.http.delete<User1>(`${this.URL}/deleteUser/${id}`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }

  public deleteVendorAcc(id: any): Observable<User1> {
    return this.http.delete<User1>(`${this.URL}/deleteVendor/${id}`)
      .pipe(
        map(data => {
          return data;
        }),
        catchError(handleError)
      );
  }
  
  

  public upateAccount(body:any): Observable<User1> {
    return this.http.patch<User1>(`${this.URL}/`,body)
      .pipe(
        map(data => {
          return data;
        }),
         catchError(handleError)
      );
  }

  public requestVendorship(body:any): Observable<User1> {
    return this.http.post<User1>(`${this.URL}/request`,body)
      .pipe(
        map(data => {
          return data;
        }),
         catchError(handleError)
      );
  }
}
