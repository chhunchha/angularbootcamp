import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <a [routerLink]="['home']">home</a>
      <a [routerLink]="['hello', 'Brian']">hello</a>
      <hr>
      <div>header could be here</div>
      <router-outlet></router-outlet>
      <div>footer could be here</div>
    </div>
  `
})
export class PageComponent {
}
