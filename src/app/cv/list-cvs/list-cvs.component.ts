import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list-cvs',
  templateUrl: './list-cvs.component.html',
  styleUrls: ['./list-cvs.component.css']
})
export class ListCvsComponent {
  @Input()
  cvs: Cv[] = [];

  @Output()
  forwardCv = new EventEmitter<Cv>();

}
