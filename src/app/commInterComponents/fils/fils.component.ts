import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  @Input()
  messageDePapa = 'il n a encore rien dit';

  @Output()
  sendMessageToDad = new EventEmitter<string>();

  triggerSendMessageToDad() {
    this.sendMessageToDad.emit('cc papa j ai pas de tune ');
  }
}
