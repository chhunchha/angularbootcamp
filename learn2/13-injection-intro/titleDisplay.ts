import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './titleDisplay.html',
  providers: [Title]
})
export class TitleComponent {
  pageTitle: string;

  constructor(private t: Title) {
    this.pageTitle = t.getTitle();
  }
}
