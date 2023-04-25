import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, retry, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetContentService {

  constructor(private http: HttpClient) {}

  getContent(){
    const url = 'https://sitenotexist.com/content/0';

    return this.http.get(url).pipe(
      retry(2),
      map( () => 'Respuesta modificada por el servicio'),
      catchError( (error) => of(error)),
      tap((value) => console.log('check for value', value)),
      map( () => ['Respuesta modificada por el servicio nuevamente']),
    );
  }
}
