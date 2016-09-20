import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./component.css'],
  templateUrl: './visuals.html'
})
export class VisualsComponent {
  n: number = 1;
  toggle_flag: boolean = false;
  increment() {
    this.n++;
  }

  classFor(x: number) {
    if (x > 7) {
      return 'extra-class';
    }
  }

  toggle() {
    this.toggle_flag = !this.toggle_flag;
  }
}
