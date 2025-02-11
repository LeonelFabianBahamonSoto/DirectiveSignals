import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, map, Observable, tap, throwError } from 'rxjs';

import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersServiceService {

  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';

  constructor() { }

  getUserById = ( userId: number ): Observable<User> => {
    return this.http.get<SingleUserResponse>(`${ this.baseUrl }/${ userId }`)
      .pipe(
        map( response => response.data ),
        catchError(error => {
          console.error( 'ERROR: ', error );
          return throwError(() => new Error('Error en la consulta getUserById'))
        })
        // tap( console.info ),
        // tap( response => console.info('getUserById RES: ', response) ),
      )
  };
}
