import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Racket } from './../data.ts';

@Component({
  selector: 'racket-list',
  templateUrl: './racket-list.component.html',
  styleUrls: ['./racket-list.component.css']
})
export class RacketListComponent implements OnInit {
  @Input() rackets: Racket[];
  @Output() selectedRacket = new EventEmitter<Racket>();
  
  constructor() { 
  }

  ngOnInit() {
  }

  setSelectedRacket(racket: Racket){
    console.log("emit" , racket);
    this.selectedRacket.emit(racket);
  }
}
