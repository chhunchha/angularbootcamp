import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LayerComponent } from './layers';
import { LayerOne } from './layer-one.component';
import { LayerTwo } from './layer-two.component';
import { LayerThree } from './layer-three.component';
import { SharedData } from './sharedData';

@NgModule({
  declarations: [
    LayerComponent,
    LayerOne,
    LayerTwo,
    LayerThree
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [LayerComponent],
  providers: [SharedData]
})
export class AppModule { }
