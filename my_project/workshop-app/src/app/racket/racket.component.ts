import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-racket',
  templateUrl: './racket.component.html',
  styleUrls: ['./racket.component.css']
})
export class RacketComponent implements OnInit {
  @Input() racket;
  private sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        console.log(params['racket']);
        this.racket = params['racket'];
      });
  }

}
