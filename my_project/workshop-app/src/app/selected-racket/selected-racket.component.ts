import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'selected-racket',
  templateUrl: './selected-racket.component.html',
  styleUrls: ['./selected-racket.component.css']
})
export class SelectedRacketComponent implements OnInit {
  @Input('selectedRackets') rackets;
  constructor() { }

  ngOnInit() {
  }

}
