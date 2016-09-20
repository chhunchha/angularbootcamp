import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'racket-search',
  templateUrl: './racket-search.component.html',
  styleUrls: ['./racket-search.component.css']
})
export class RacketSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();

  search = { text: "" };
  constructor() { }

  ngOnInit() {
  }

  searchChanged() {
    this.searchEvent.emit(this.search.text);
  }

}
