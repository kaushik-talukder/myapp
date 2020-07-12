export class CoronaReport {
  active: number;
  cases: number;
  casesPerOneMillion: number;
  deaths: number;
  deathsPerOneMillion: number;
  state: string;
  tests: number;
  testsPerOneMillion: number;
  todayCases: number;
  todayDeaths: number;
  updated: Date;

  constructor(
    active: number,
    cases: number,
    casesPerOneMillion: number,
    deaths: number,
    deathsPerOneMillion: number,
    state: string,
    tests: number,
    testsPerOneMillion: number,
    todayCases: number,
    todayDeaths: number,
    updated: Date
  ) {
    this.active = active;
    this.cases = cases;
    this.casesPerOneMillion = casesPerOneMillion;
    this.deaths = deaths;
    this.deathsPerOneMillion = deathsPerOneMillion;
    this.state = state;
    this.tests = tests;
    this.testsPerOneMillion = testsPerOneMillion;
    this.todayCases = todayCases;
    this.todayDeaths = todayDeaths;
    this.updated = updated;
  }
}
