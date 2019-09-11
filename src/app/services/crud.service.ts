import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public url = 'http://polls.apiblueprint.org/';

  constructor(
    private http: HttpClient
  ) { }

  getQuestions() {
    return this.http.get(this.url + 'questions');
  }
}
