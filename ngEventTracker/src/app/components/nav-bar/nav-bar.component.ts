import { EtService } from './../../service/et.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(etservice: EtService, http: HttpClientModule) {


  }

  // ping() {
  //   return this.http.get<any[]>('http://localhost:8090/api/ping');

  // }
  ngOnInit() {
  }


}
