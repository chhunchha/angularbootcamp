import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';

// Component used in the main outlet

@Component({
  template: `
    <h2>Welcome Home</h2>
    <p>This is a simple example component.</p>`
})
export class HomeComponent { }

@Component({
  template: `
    <h2>Hello {{name$ | async}}!</h2>
    <p>I am a sample component.</p>
  `
})
export class NameComponent implements OnInit {
  private name$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name$ = this.route.params.map(params => params['name']);
  }
}

@Component({
  template: `
    <div style="border: 3px solid blue; padding: 3px; margin: 3px">
      <h2>I am a blue box</h2>
    </div>`
})
export class BlueBox { }

// Components used in the side (aux) outlet

@Component({
  template: `
    <div style="border: 3px solid green; padding: 3px; margin: 3px">
      <h5>This is a chat component</h5>
    </div>`
})
export class ChatComponent { }

@Component({
  template: `
    <div style="border: 3px solid green; padding: 3px; margin: 3px">
      <h5>Here are some tasks</h5>
    </div>
  `
})
export class TaskComponent { }
