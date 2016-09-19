import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/switchMap';

import { EmployeeLoader, IEmployee } from './employeeLoader';

@Component({
  selector: 'employee-detail',
  templateUrl: './employeeDetail.html'
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
  employee: IEmployee;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private loader: EmployeeLoader) {
    console.log('EmployeeDetailComponent constructor');
   }

  ngOnInit() {
    console.log('EmployeeDetailComponent ngOnInit');
    const employeeId$ = this.route.params.map(params => params['employeeId']);
    this.sub = employeeId$.switchMap(id => this.loader.getDetails(id))
      .subscribe(e => {
        console.log('Employee data arrived');
        this.employee = e;
      });
  }

  ngOnDestroy() {
    console.log('EmployeeDetailComponent ngOnDestroy');
    this.sub.unsubscribe();
  }
}
