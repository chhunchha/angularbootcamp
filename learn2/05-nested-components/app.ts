import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NestingComponent } from './nesting';
import { BlueCardComponent } from './blue';
import { GreenCardComponent } from './green';
import { RedCardComponent } from './red';

@NgModule({
  declarations: [
    NestingComponent,
    GreenCardComponent,
    RedCardComponent,
    BlueCardComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [NestingComponent]
})
export class AppModule { }
