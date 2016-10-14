import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  
  racket_brands = {
    head: 'Head',
    prince: 'Prince',
    babolat: 'Babolat',
    wilson: 'Wilson'
  }

  racket_images = {
    head : "http://www.directtennis.co.uk/Images/ExtraLarge/head_ti_s6_tennis_racket_black.jpg",
    wilson : "http://tennisbusters.com/wp-content/uploads/2014/12/wilson-tennis-rackets-9.jpg",
    prince : "http://tennisbusters.com/wp-content/uploads/2014/12/prince-tennis-racket-10.jpg",
    babolat : "http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/2aYAAOxyRNJSgnl8/$_1.JPG?set_id=2"
  }

  // rackets = {
  //   data: [
  //     {
  //     "name": "Head A",
  //     "weight": 100,
  //     "img": this.racket_images.head,
  //     "brand": this.racket_brands.head
  //     },
  //     {
  //       "name": "Wilson A",
  //       "weight": 90,
  //       "img": this.racket_images.wilson,
  //       "brand": this.racket_brands.wilson
  //     },
  //     {
  //       "name": "Prince A",
  //       "weight": 110,
  //       "img": this.racket_images.prince,
  //       "brand": this.racket_brands.prince
  //     },
  //     {
  //       "name": "Babolat A",
  //       "weight": 95,
  //       "img": this.racket_images.babolat,
  //       "brand": this.racket_brands.babolat
  //     },
  //     {
  //       "name": "Head B",
  //       "weight": 105,
  //       "img": this.racket_images.head,
  //       "brand": this.racket_brands.head
  //     },
  //     {
  //       "name": "Wilson B",
  //       "weight": 95,
  //       "img": this.racket_images.wilson,
  //       "brand": this.racket_brands.wilson
  //     },
  //     {
  //       "name": "Prince B",
  //       "weight": 112,
  //        "img": this.racket_images.prince,
  //        "brand": this.racket_brands.prince
  //     },
  //     {
  //       "name": "Babolat B",
  //       "weight": 90,
  //       "img": this.racket_images.babolat,
  //       "brand": this.racket_brands.babolat
  //     }
  //   ]
  // };

  constructor(private http: Http) { }

  getRackets() {
    // return Observable.of(this.http.get('./assets/rackets.json'));
    return this.http.get('./assets/rackets.json');

  }

  getRacketImages() {
    return this.racket_images;
  }
}
