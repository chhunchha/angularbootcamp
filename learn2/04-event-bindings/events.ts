import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './events.html'
})
export class EventsComponent {
  n: number = 0;
  name: string = "";

  increment() {
    this.n ++;
  }

  over(x: MouseEvent): void {
    console.log('Over: ', x);
  }

  move(x: MouseEvent): void {
    console.log('Move: ', x);
  }

  inputKeyUp(x: Event): void {
    console.log(x.target.value);
  }
}
