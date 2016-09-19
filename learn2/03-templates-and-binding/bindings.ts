import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './bindings.html'
})
export class BindingsComponent {
  version: string;
  // Implicit public, equivalent to
  // public version: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.
  person: string;
  stringWithHtml: string;
  personObject: { mother: string; };
  private x: string = 'Only available inside';

  first_name: string;
  last_name: string;
  private phone: string;

  constructor() {
    this.version = 'Other';
    this.person = 'everyone';
    this.stringWithHtml = `
      <button onClick='console.log('hello from old-school HTML/JS');'>
        Press Me
      </button>
      <i>Hello from <b>HTML</b></i>
    `;
    this.personObject = { mother: 'Jane' };
    this.x = 'Hello World';

    this.first_name = 'Sumant';
    this.last_name = 'Chhunchha';
    this.phone = '408-430-4655';
  }

  calculate(): number {
    console.log('calculating');
    return 22 / 7;
  }
}
