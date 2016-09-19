import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { TitleComponent }  from './titleDisplay';

@NgModule({
  declarations: [TitleComponent],
  imports: [BrowserModule, HttpModule],
  bootstrap: [TitleComponent]
})
export class AppModule { }
