import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';
  color = this.defaultColor;

  changeColor(newColorInput: HTMLInputElement): void {
    this.color = newColorInput.value;
    newColorInput.value = ''
  }

  reset()  {
    this.color = this.defaultColor;
  }
}
