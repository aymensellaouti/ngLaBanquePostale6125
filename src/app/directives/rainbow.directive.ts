import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]'
})
export class RainbowDirective {

  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';
  constructor() {
    console.log('Rainbow');
  }

  @HostListener('keyup') onKeyUp() {
    this.color = this.borderColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
