import {Component} from '@angular/core';

import {IOrder, fakeApiOrderData} from './apiTypes';

@Component({
  selector: 'my-app',
  templateUrl: './manager.html'
})
export class ManagerComponent {
  appOrders: IOrder[];
  order: IOrder;

  constructor() {
    this.appOrders = fakeApiOrderData;
  }

  choose(i: number) {
    this.order = this.appOrders[i];
  }
}
