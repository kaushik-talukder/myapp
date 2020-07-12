import {Component, OnInit} from '@angular/core';
import {CoronaApiService} from './corona-api.service';
import {CoronaReport} from './corona-report';

@Component({
  selector: 'app-corona-report',
  templateUrl: './corona-report.component.html',
  styleUrls: ['./corona-report.component.css']
})
export class CoronaReportComponent implements OnInit {
  stateName = '';
  coronaReport: CoronaReport = null;

  constructor(private coronaApiService: CoronaApiService) {
  }

  ngOnInit(): void {
  }

  getReport(): void {
    console.log(this.stateName);
    this.coronaApiService.getReport(this.stateName).subscribe((data: CoronaReport) => {
      this.coronaReport = data;
      console.log(this.coronaReport);
    });
  }
}
