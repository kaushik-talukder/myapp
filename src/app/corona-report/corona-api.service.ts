import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CoronaReport} from './corona-report';
import {CoronaReportAdapter} from './corona-report-adapter';
import {UsaState} from './usa-state';
import {UsaStateAdapter} from './usa-state-adapter';

@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {

  constructor(private httpClient: HttpClient,
              private coronaReportAdapter: CoronaReportAdapter,
              private usaStateAdapter: UsaStateAdapter) {
  }

  public getReport(state: string): Observable<CoronaReport> {
    return this.httpClient.get('https://disease.sh/v3/covid-19/states/' + state)
      .pipe(map((data: any) => this.coronaReportAdapter.adapt(data)));
  }

  public getAllUsaStates(): Observable<any> {
    return this.httpClient.get('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json')
      .pipe(map((data: any[]) => data.map((item) => this.usaStateAdapter.adapt(item))));
  }
}
