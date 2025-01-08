import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { HighlightDirective } from '../highlight.directive';
import { RainbowDirective } from '../rainbow.directive';

@Component({
    selector: 'app-lampe',
    templateUrl: './lampe.component.html',
    styleUrls: ['./lampe.component.css'],
    standalone: true,
    imports: [NgClass, HighlightDirective, RainbowDirective]
})
export class LampeComponent {
  interrupteur() {
    this.isOn = !this.isOn;
  }
  isOn = true;
}
