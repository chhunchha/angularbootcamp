﻿import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as state from './state';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

@Component({
  selector: 'my-app',
  templateUrl: './example.html'
})
export class ExampleComponent {
  berry$: Observable<number>;
  apple$: Observable<number>;

  constructor(public store: Store<state.IAppState>) {
    this.berry$ = store.select(s => s.berryCounter);
    this.apple$ = store.select(s => s.appleCounter);
  }

  pickBerry() {
    this.store.dispatch({ type: state.PICK_BERRY });
  }

  pickApple() {
    this.store.dispatch({ type: state.PICK_APPLE });
  }

  empty() {
    this.store.dispatch({ type: state.EMPTY_CART });
  }
}
