import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})

export class SiteComponent {
  httpClient: HttpClient;
  private url = 'api/posts';


selected = true;
selectedShowAll = false;
selectedShowById = false;
selectedMath = false;
t1: any;
totalNumber: number;
// todos: Todo[];
http: HttpClient;
url2 = "http://localhost:8090/api/ping";


todos = [
  {
    category: 'dfs',
    description: 'sdfasdf',
    id: 5,
    lineNumber: 319,
    name: 'sadf',
    priority: 'd',
    subMenu: 's',
    timeCreated: 'a',
    urlList: 'f',
    userStory: 'g',
  },
  {
    category: 'dfs',
    description: 'sdfasdf',
    id: 5,
    lineNumber: 319,
    name: 'sadf',
    priority: 'd',
    subMenu: 's',
    timeCreated: 'a',
    urlList: 'f',
    userStory: 'g',
  }
];

constructor(http: HttpClient) {
  http.get<any[]>('http://localhost:8090/api/posts')
    .subscribe(response => {
      console.log(response);
    });
}
ping() {
  console.log('ping Pre');
  // return this.httpClient.get<any[]>('http://localhost:8090/api/ping');
  console.log('ping Post');
}

// index(): Todos[] {
//   // Return defensive copy of private array
//   return [...this.todos];
// };


showAll() {
  console.log('showAll');
  this.selectedShowAll = true;
  this.selectedMath = false;
  this.selectedShowById = false;
  console.log('selectedShowAll = ' + this.selectedShowAll);

}


showMath() {
  this.totalNumber = 0;
  console.log('showMath');
  this.selectedShowAll = false;
  this.selectedMath = true;
  this.selectedShowById = false;

  console.log('before loop' + this.totalNumber);

  this.todos.forEach(r => {
    this.totalNumber += r.lineNumber;
  });
  console.log('After loop' + this.totalNumber);

  console.log('ShowById : selectedShowAll = ' + this.selectedShowAll);
  console.log('ShowById : selectedMath = ' + this.selectedMath);
  console.log('ShowById : selectedShowById = ' + this.selectedShowById);
}

create(form: NgForm) {

  console.log(form.value);

  this.todos.push(form.value);

  this.selectedShowAll = true;
  this.selectedShowById = false;
  this.selectedMath = false;

  return this.http.post<Example>(url, form.value)
    .pipe(
      catchError(this.handleError)
    );
  form.reset();
}

update(form: NgForm) { }

delete (form: NgForm) {

  console.log(form.value);

}

showById(form: NgForm) {

  console.log(form.value);
  this.selectedShowAll = false;
  this.selectedShowById = true;
  this.selectedMath = false;

  console.log('ShowById : selectedShowAll = ' + this.selectedShowAll);
  console.log('ShowById : selectedShowById = ' + this.selectedShowById);

  form.reset();
}

handleError(error: any) {
  console.error('Something Broke');
  return throwError(error.json().error || 'Server Error');
}
}
