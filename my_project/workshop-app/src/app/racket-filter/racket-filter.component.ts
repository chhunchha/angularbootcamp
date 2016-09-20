import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'racket-filter',
  templateUrl: './racket-filter.component.html',
  styleUrls: ['./racket-filter.component.css']
})
export class RacketFilterComponent implements OnInit {
  @Input('racketBrands') brands: string[];
  @Input('racketWeights') weights: number[];

  @Output() filterEvent = new EventEmitter();
  constructor() { }

  filters = {}

  ngOnInit() {
  }

  filterChanged() {
    this.filterEvent.emit(this.filters);
  }

}
