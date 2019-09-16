import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RateByDate} from './models/RateByDate';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {
  // API url.
  private urlapi = 'https://api.exchangeratesapi.io/latest';
// Object to get the rates' information
  public currentEuroRates: any = null;

  // Url save rates' data
  private ratesByDateApi = 'https://api-base.herokuapp.com/api/pub/rates';
  public ratesByDate: RateByDate[] = null;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getCurrentEuroRates();
  }

// Method to GET the information from api exchanges
  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.urlapi}?symbols=${currencies}`;
    this.httpClient
      .get(url)
      .subscribe(apiData => (this.currentEuroRates = apiData));
  }

  // Method to POST the information to heroku
  public postRatesByDate() {
    const ratesByDate: RateByDate[] = this.transformExchangeRates();
    ratesByDate.forEach(rate =>
      this.httpClient.post<RateByDate>(this.ratesByDateApi, rate).subscribe()
    );
  }

  // Method to transform.
  private transformExchangeRates(): RateByDate[] {
    const currentDate = this.currentEuroRates.date;
    const currentRates = this.currentEuroRates.rates;
    const ratesByDate = Object.keys(currentRates).map((keyRate: string) => ({
      date: currentDate,
      currency: keyRate,
      euros: currentRates[keyRate]
    }));
    return ratesByDate;
  }

  // Method to GET the information to heroku
  public getRatesByDate() {
    this.httpClient
      .get<RateByDate[]>(this.ratesByDateApi)
      .subscribe(apiResult => (this.ratesByDate = apiResult));
  }
  // Method to DELETE the information to heroku
  public deleteRatesByDate() {
    this.httpClient.delete(this.ratesByDateApi).subscribe();
  }
}
