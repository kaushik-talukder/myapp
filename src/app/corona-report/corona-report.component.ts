import { Component, OnInit } from '@angular/core';
import {CoronaApiService} from './corona-api.service';

@Component({
  selector: 'app-corona-report',
  templateUrl: './corona-report.component.html',
  styleUrls: ['./corona-report.component.css']
})
export class CoronaReportComponent implements OnInit {
  stateName = '';
  constructor(private coronaApiService: CoronaApiService) { }

  ngOnInit(): void {
  }

  getReport(): void {
    console.log(this.stateName);
    this.coronaApiService.getReport(this.stateName).subscribe((data) => {
      console.log(data);
    });
  }
}
