import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { handleError } from 'src/app/helpers/extractErrors';
import { Food } from 'src/app/models/food.model';
import { User1 } from 'src/app/models/user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = `http://localhost:3000/api/v1/users`

  constructor(private http:HttpClient) { }

  public getMyWishes(): Observable<User1> {
    return this.http.get<User1>(`${this.URL}/me/`)
      .pipe(
        map(data => {
          return data;
        }), catchError(handleError));
       
  }

}
