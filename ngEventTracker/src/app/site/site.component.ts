import { Tracker } from '../models/tracker';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestService } from 'src/app/service/et.service';
import { url } from 'inspector';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})

export class SiteComponent {
  [x: string]: any;
  httpClient: HttpClient;
  private url = 'api/posts';

  selectedShowAll = false;
  selectedShowById = false;
  selectedMath = false;
  t1: any;
  totalNumber: number;
  todos: Tracker[];
  http: HttpClient;
  url2 = 'http://localhost:8090/api/ping';



  constructor(testService: TestService, http: HttpClient) {
    http.get<any[]>('http://localhost:8090/api/posts')
      .subscribe(response => {
        console.log(response);
        // this.todos = response;
      });
    // console.log('todos assigned = ' + this.todos);
  }

  ngOnInit() {
    this.todos = this.etService.index();
  }



  create(track: Tracker) {
    console.log(track);

    this.todos.index(track);
    this.todos = this.etservice.index();

    this.selectedShowAll = true;
    this.selectedShowById = false;
    this.selectedMath = false;

    return this.http.post<Tracker>(this.url, track)
      .pipe(
        catchError(this.handleError)
      );

  }

  update(form: NgForm) { }

  delete(form: NgForm) {

    console.log(form.value);

  }

  showById(form: NgForm) {
    this.selectedShowAll = false;
    this.selectedShowById = true;
    this.selectedMath = false;

    console.log('show by id = ' + form.value);
    form.reset();
  }

  handleError(error: any) {
    console.error('Something Broke');
    return throwError(error.json().error || 'Server Error');
  }


  // Done ==================================================================
  showAll() {
    console.log('showAll');
    this.selectedShowAll = true;
    this.selectedMath = false;
    this.selectedShowById = false;
    console.log('selectedShowAll = ' + this.selectedShowAll);

  }

  ping() {
    console.log('ping Pre');
    var result = this.httpClient.get<any[]>('http://localhost:8090/api/ping');
    console.log('ping Post =' + result);
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
}
