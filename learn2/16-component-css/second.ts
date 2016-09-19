import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="card">Second Component</div>
  `,
  styles: [`
    .card {
      border: green 2px solid;
    }
  `]
})
export class SecondComponent {

}
