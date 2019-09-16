import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-obserates',
  templateUrl: './obserates.component.html',
  styleUrls: ['./obserates.component.css']
})
export class ObseratesComponent implements OnInit {

  private ratesApi
    = 'https://api.exchangeratesapi.io/latest';
  public currentEuroRates$: Observable<any> = null;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCurrentEuroRates();
  }

  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.ratesApi}?symbols=${currencies}`;
    this.currentEuroRates$ = this.httpClient.get(url);
  }
}
