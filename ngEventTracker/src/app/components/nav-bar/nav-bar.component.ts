import { HttpClientModule } from '@angular/common/http';
import { TestService } from './../../service/service.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(s: TestService, http: HttpClientModule) { }

  ngOnInit() {
  }

  // ping() {
  //   return this.http.get<any[]>('http://localhost:8090/api/ping');

  // }
}
