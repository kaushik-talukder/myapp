import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CoronaReport} from './corona-report';
import {CoronaReportAdapter} from './corona-report-adapter';

@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {

  constructor(private httpClient: HttpClient, private adapter: CoronaReportAdapter) {
  }

  public getReport(state: string): Observable<CoronaReport> {
    return this.httpClient.get('https://disease.sh/v3/covid-19/states/' + state)
      .pipe(map((data: any) => this.adapter.adapt(data)));
  }
}
