import { Component } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent {
  interrupteur() {
    this.isOn = !this.isOn;
  }
  isOn = true;
}
