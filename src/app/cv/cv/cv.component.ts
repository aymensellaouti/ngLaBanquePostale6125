import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      'Bougrine',
      'Anissa',
      'Dev',
      'rotating_card_profile.png',
      '1234',
      20
    ),
    new Cv(
      2,
      'Madrange',
      'Solène',
      'Dev',
      'rotating_card_profile.png',
      '1235',
      20
    ),
  ];
  /**
   * Le cv sélectionné dans la liste
   */
  selectedCv: Cv | null = null;

  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
