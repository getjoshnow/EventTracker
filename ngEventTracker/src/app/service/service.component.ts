import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';



//@Injectable()
export class TestService {
  posts: any[];
  private url = 'http://localhost:8090/api/posts';

  // Inject the HttpClient:
  constructor(private http: HttpClient) {
    http.get<any[]>('http://localhost:8090/api/ping')
      .subscribe(response => {
        console.log(response);
      });


  }


  index() {
    return this.http.get<any[]>(this.url + 's');
  }

  show(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }


  index2() {
    return this.http.get<any[]>(this.url + '?sorted=true')
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in PokeService.index()');
        })
      );
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })

};

//  this.http.post(url, data, httpOptions)
// create(data: Example) {
//   httpOptions = {};
//   return this.http.post<any>(url, data, httpOptions);
//}

// // this.http.put(url, data, httpOptions)
// update(id: number, data: Example) {
//   httpOptions = {};
//   return this.http.put<any>(url + '/' + id, data, httpOptions);
// }

// // this.http.delete(url, httpOptions)
// destroy(id: number) {
//   httpOptions = {};
//   return this.http.delete<any>(url + '/' + id, httpOptions);
// }

// }
// exporclass TestComponent implements OnInit {
//   title = 'Hello SD';
//   array = [];

//   constructor(private testService: TestService) { }

//   ngOnInit() {
//     this.getAllElements();
//   }

//   getAllElements() {
//     this.testService.index().subscribe(
//       data => this.array = data,

//       err => console.error('Observer got an error: ' + err)
//     );
//   }

//   createNewElement(data) {
//     this.testService.create(data).subscribe(
//       data => {
//         this.getAllElements();
//       },
//       err => console.error('Observer got an error: ' + err)
//     );
//   }

