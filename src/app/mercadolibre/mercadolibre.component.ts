import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mercadolibre',
  templateUrl: './mercadolibre.component.html',
  styleUrls: ['./mercadolibre.component.css']
})
export class MercadolibreComponent implements OnInit {
  private mlurlapi = 'https://api.mercadolibre.com/sites';


  constructor(
    private mlHttpClient: HttpClient
  ) {
  }

  ngOnInit() {
    this.getMlSites();
  }

  private getMlSites() {

    const url = `${this.mlurlapi}`;
    this.mlHttpClient.get(url).subscribe();
  }
}
