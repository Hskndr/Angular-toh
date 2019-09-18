import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-apiary-service',
  templateUrl: './apiary-service.component.html',
  styleUrls: ['./apiary-service.component.css']
})
export class ApiaryServiceComponent implements OnInit {
  private apiaryApi = 'http://polls.apiblueprint.org';
  public apiaryQuestions$: Observable<any> = null;


  constructor(
    private apiartHttpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.getApiaryQuestions();
  }

  private getApiaryQuestions() {
    const questions = 'questions, published_at, choices';
    const url = `${this.apiaryApi}/${questions}`;
    this.apiaryQuestions$ = this.apiartHttpClient.get(url);
  }


}
