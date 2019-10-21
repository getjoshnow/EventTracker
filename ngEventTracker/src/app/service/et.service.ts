import { Tracker } from './../models/tracker';
import { catchError } from 'rxjs/operators';
import { HttpClient } from 'selenium-webdriver/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { url } from 'inspector';

@Injectable()
export class TestService {
  private url = 'api/example';

  // Inject the HttpClient:
  constructor(private http: HttpClient) { }

  index(): Tracker[] {
  return this.http.get<Tracker[]>(this.url)
    .pipe(
      catchError(this.handleError)
    );
}

create(data) {
  return this.http.post<Tracker>(url, data)
    .pipe(
      catchError(this.handleError)
    );
}

handleError(error: any) {
  console.error('Something Broke');
  return throwError(error.json().error || 'Server Error');
}
}
