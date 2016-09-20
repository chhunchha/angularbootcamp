import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'racket-filter',
  templateUrl: './racket-filter.component.html',
  styleUrls: ['./racket-filter.component.css']
})
export class RacketFilterComponent implements OnInit {
  @Input('racketBrands') brands: string[];
  @Input('racketWeights') weights: number[];
  constructor() { }

  ngOnInit() {
  }

}
