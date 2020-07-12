import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getReport(state: string): Observable<object> {
    return this.httpClient.get('https://disease.sh/v3/covid-19/states/' + state);
  }
}
