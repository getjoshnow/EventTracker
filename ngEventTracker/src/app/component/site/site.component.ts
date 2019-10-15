import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
// ngOnInit() {
// }

export class SiteComponent {
  httpClient: HttpClient;
  private url = 'api/posts';

  constructor(http: HttpClient) {
    //http.get('http://localhost:8090/api/posts')
    http.get<any[]>('http://localhost:8090/api/posts')
      .subscribe(response => {
        console.log(response);
        console.log('THIS IS ****************************8');

      });
  }
  ping() {
    return this.httpClient.get<any[]>('http://localhost:8090/api/ping');
  }

}
