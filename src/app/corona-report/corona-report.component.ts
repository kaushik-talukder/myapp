import {Component, OnInit} from '@angular/core';
import {CoronaApiService} from './corona-api.service';
import {CoronaReport} from './corona-report';
import {UsaState} from './usa-state';

@Component({
  selector: 'app-corona-report',
  templateUrl: './corona-report.component.html',
  styleUrls: ['./corona-report.component.css']
})
export class CoronaReportComponent implements OnInit {
  stateName = '';
  coronaReport: CoronaReport = null;
  usaStates: UsaState[] = null;

  constructor(private coronaApiService: CoronaApiService) {

  }

  ngOnInit(): void {
    this.getAllUsaStates();
  }

  getReport(): void {
    this.coronaApiService.getReport(this.stateName).subscribe((data: CoronaReport) => {
      this.coronaReport = data;
      console.log(this.coronaReport);
    });
  }

  getAllUsaStates(): void {
    this.coronaApiService.getAllUsaStates().subscribe((data: UsaState[]) => {
      this.usaStates = data;
    });
  }
}
