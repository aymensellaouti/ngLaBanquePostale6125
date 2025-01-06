import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  name = 'aymen';
  /**
   * définit si l'element est afficher ou non
   */
  isHidden = false;
  showHideMessage = 'hide';
  message = '';
  /**
   * Elle permet d'afficher ou de cacher un élément
   */
  showHide() {
    this.isHidden = !this.isHidden;
    this.isHidden
      ? (this.showHideMessage = 'show')
      : (this.showHideMessage = 'hide');
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
