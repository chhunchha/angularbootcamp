import { Component, OnInit } from '@angular/core';
import { racket_images, Racket } from './../data.ts';
import { DataService } from './../data.service.ts';
import { Response } from '@angular/http';

import * as _ from 'lodash';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css'],
  providers: [DataService]
})
export class SelectionScreenComponent implements OnInit {
  rackets;
  unique_brands;
  unique_weights;
  selectedRackets: Racket[] = [];
  search: string;
  filters = {};
  racketsObs;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.racketsObs = this.dataService.getRackets();
    this.racketsObs.subscribe((res: Response) => {
      console.log(res);
      this.rackets = res.json();
      this.unique_brands = _.sortBy(_.uniq(_.map(this.rackets, 'brand')));
      this.unique_weights = _.sortBy(_.uniq(_.map(this.rackets, 'weight')));
    });

    // this.rackets = this.dataService.getRackets();
  }

  setSelectedRacket(racket: Racket) {
    console.log("Got in selection-screen", racket);
    this.selectedRackets.push(racket);
    console.log(this.selectedRackets);
  }

  searchChanged(search: string) {
    console.log('got search string', search);
    this.search = search;
  }

  filterChanged(filters) {
    console.log('filters' , filters);
    this.filters = filters;
  }

  ngOnDistroy() {
    this.racketsObs.unsubscribe();
  }
}
