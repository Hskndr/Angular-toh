import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HskndrCodeComponent } from './hskndr-code.component';

describe('HskndrCodeComponent', () => {
  let component: HskndrCodeComponent;
  let fixture: ComponentFixture<HskndrCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HskndrCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HskndrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
