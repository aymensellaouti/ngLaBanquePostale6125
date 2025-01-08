import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mini-word',
    templateUrl: './mini-word.component.html',
    styleUrls: ['./mini-word.component.css'],
    standalone: true,
    imports: [NgStyle, FormsModule]
})
export default class MiniWordComponent {
  color = '#ff00ff';
  fontSize = 75;
  fontFamily = 'garamond';
}
