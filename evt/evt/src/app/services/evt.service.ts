import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

//@Injectable()
export class TestService {
  posts: any[];
  private url = 'http://localhost:8090/api/posts';

  // Inject the HttpClient:
  constructor(private http: HttpClient) {
    http.get('http://localhost:8090/api/ping')
      .subscribe(response => {
        console.log(response);
      });
  }


  show(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }
}
