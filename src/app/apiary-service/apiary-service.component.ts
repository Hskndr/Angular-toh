import {Component, OnInit} from '@angular/core';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-apiary-service',
  templateUrl: './apiary-service.component.html',
  styleUrls: ['./apiary-service.component.css']
})
export class ApiaryServiceComponent implements OnInit {

  constructor(
    private crudService: CrudService
  ) {
  }

  ngOnInit() {
  }

  loadQuestions() {
    this.crudService.getQuestions();
  }
}
