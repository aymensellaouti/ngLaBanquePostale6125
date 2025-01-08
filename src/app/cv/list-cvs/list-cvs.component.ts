import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { NgFor, NgClass } from '@angular/common';
import { CvItemComponent } from '../cv-item/cv-item.component';

@Component({
    selector: 'app-list-cvs',
    templateUrl: './list-cvs.component.html',
    styleUrls: ['./list-cvs.component.css'],
    standalone: true,
    imports: [NgFor, NgClass, CvItemComponent]
})
export class ListCvsComponent {
  @Input()
  cvs: Cv[] = [];

  // @Output()
  // forwardCv = new EventEmitter<Cv>();

}
