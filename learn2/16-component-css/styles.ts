import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Component CSS &amp; Encapsulation</h3>
    <div class="card">
      Three components with different styles:
      <app-first></app-first>
      <app-second></app-second>
      <app-third></app-third>
    </div>
  `
})
export class StylesComponent {

}
