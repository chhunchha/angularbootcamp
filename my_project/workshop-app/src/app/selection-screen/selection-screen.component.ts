import { Component, OnInit } from '@angular/core';
import { rackets, racket_images, Racket } from './../data.ts';

import * as _ from 'lodash';

// let racket_images = {
//   head : "http://www.directtennis.co.uk/Images/ExtraLarge/head_ti_s6_tennis_racket_black.jpg",
//   wilson : "http://tennisbusters.com/wp-content/uploads/2014/12/wilson-tennis-rackets-9.jpg",
//   prince : "http://tennisbusters.com/wp-content/uploads/2014/12/prince-tennis-racket-10.jpg",
//   babolat : "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/2aYAAOxyRNJSgnl8/$_1.JPG?set_id=2"
// }

console.log(racket_images);

// let racket_brands = {
//   head: 'Head',
//   prince: 'Prince',
//   babolat: 'Babolat',
//   wilson: 'Wilson'
// }
 
 //moved to data.ts
// let rackets = {
//     data: [
//       {
//       "name": "Head A",
//       "weight": 100,
//       "img": racket_images.head,
//       "brand": racket_brands.head
//       },
//       {
//         "name": "Wilson A",
//         "weight": 90,
//         "img": racket_images.wilson,
//         "brand": racket_brands.wilson
//       },
//       {
//         "name": "Prince A",
//         "weight": 110,
//         "img": racket_images.prince,
//         "brand": racket_brands.prince
//       },
//       {
//         "name": "Babolat A",
//         "weight": 95,
//         "img": racket_images.babolat,
//         "brand": racket_brands.babolat
//       },
//       {
//         "name": "Head B",
//         "weight": 105,
//         "img": racket_images.head,
//         "brand": racket_brands.head
//       },
//       {
//         "name": "Wilson B",
//         "weight": 95,
//         "img": racket_images.wilson,
//         "brand": racket_brands.wilson
//       },
//       {
//         "name": "Prince B",
//         "weight": 112,
//          "img": racket_images.prince,
//          "brand": racket_brands.prince
//       },
//       {
//         "name": "Babolat B",
//         "weight": 90,
//         "img": racket_images.babolat,
//         "brand": racket_brands.babolat
//       }
//     ]
// };

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {
  rackets = rackets.data;
  unique_brands = _.sortBy(_.uniq(_.map(rackets.data, 'brand')));
  unique_weights = _.sortBy(_.uniq(_.map(rackets.data, 'weight')));
  selectedRackets: Racket[] = [];
  search: string;
  filters = {};

  constructor() { }

  ngOnInit() {
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
}
