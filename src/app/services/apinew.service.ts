import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApinewService {

  API_KEY = '7799be2adae6430db0999a02d0cf58c5';

  constructor(private httpClient: HttpClient) {
  }

  public getNews() {
    // return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
    return this.httpClient.get('assets/new.mock.json');
  }

  /* The HttpClient get() method is designed to send HTTP GET requests. The syntax is as follows:
     get(url: string, options: {
     headers?: HttpHeaders;
     observe: 'response';
     params?: HttpParams;
     reportProgress?: boolean;
     responseType?: 'json';
     withCredentials?: boolean;
   }): Observable<HttpResponse<Object>>;*/
}
