import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Resolve} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import {ICompany} from './company';

@Injectable()
export class CompanyListRetriever implements Resolve<ICompany[]> {
  constructor(private http: Http) { }

  getCompanies() {
    return this.http.get('../demo-data/companies.json').map(r => r.json()).delay(1000);
  }

  resolve() {
    return this.getCompanies();
  }
}
