import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Racket } from './../data.ts';

@Component({
  selector: 'racket-card',
  templateUrl: './racket-card.component.html',
  styleUrls: ['./racket-card.component.css']
})
export class RacketCardComponent implements OnInit {
  @Input() racket: Racket;
  @Input() selected: boolean;

  @Output() selectedRacket = new EventEmitter<Racket>();

  // selectedRacket: {};

  constructor() { }

  ngOnInit() {
  }

  selectRacket(racket : Racket ) {
    console.log("emit ", racket);
    this.selectedRacket.emit(racket);
  }

}
