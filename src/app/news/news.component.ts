
/* HSKNDR: WITH *NGFOR */

import {Component, OnInit} from '@angular/core';
import {ApinewService} from '../services/apinew.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;

  constructor(private apiNewsService: ApinewService) {
  }

  ngOnInit() {
    this.apiNewsService.getNews().subscribe(
      (data) => {
        console.log(data);
        this.articles = data['articles'];
      }
    );
  }

}

