import { Component, OnInit } from '@angular/core';
import { SharedData } from './sharedData';

@Component({
  selector: 'layer-three',
  templateUrl: 'layer-three.component.html'
})
export class LayerThree implements OnInit{
  unsharedValue: number = 0;
  s: string;
  constructor(public shared: SharedData) { }

  ngOnInit() {
    this.s = this.shared.userInput;
    console.log(this.s);
  }
  
  incUnshared() {
    this.unsharedValue++;
  }
}
