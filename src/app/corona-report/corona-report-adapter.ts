import {Injectable} from '@angular/core';
import {Adapter} from '../adapter';
import {CoronaReport} from './corona-report';

@Injectable({
  providedIn: 'root'
})
export class CoronaReportAdapter implements Adapter<CoronaReport> {
  adapt(item: any): CoronaReport {
    return new CoronaReport(
      item.active,
      item.cases,
      item.casesPerOneMillion,
      item.deaths,
      item.deathsPerOneMillion,
      item.state,
      item.tests,
      item.testsPerOneMillion,
      item.todayCases,
      item.todayDeaths,
      new Date(item.updated)
    );
  }
}
