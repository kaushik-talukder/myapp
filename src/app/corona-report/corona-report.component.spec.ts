import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaReportComponent } from './corona-report.component';

describe('CoronaReportComponent', () => {
  let component: CoronaReportComponent;
  let fixture: ComponentFixture<CoronaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
