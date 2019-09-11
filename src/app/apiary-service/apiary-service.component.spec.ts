import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiaryServiceComponent } from './apiary-service.component';

describe('ApiaryServiceComponent', () => {
  let component: ApiaryServiceComponent;
  let fixture: ComponentFixture<ApiaryServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiaryServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiaryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
