import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// private url = 'api/example';


export class EtService {

  private baseUrl = 'http://localhost:8090/api/posts';

  posts: any[];

  private url = this.baseUrl + 'poke/data/poke';

  constructor(private http: HttpClient) {
    http.get<any[]>('http://localhost:8090/api/ping')
      .subscribe(response => {
        console.log(response);
      });
  }


  index() {
    return this.http.get<Pokemon[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }





  index2() {
    return this.http.get<any[]>(this.url + 's');
  }

  show(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  // index2() {
  //   return this.http.get<Example[]>(url)
  //     .pipe(
  //       catchError(handleError)
  //     );
  // }

  // create2(data) {
  //   return this.http.post<Example>(url, data)
  //     .pipe(
  //       catchError(handleError)
  //     );
  // }

  handleError2(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');
  }

}
