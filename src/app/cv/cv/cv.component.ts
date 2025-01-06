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
    new Cv(
      3,
      'VOIMENT',
      'Henri',
      'Dev',
      'rotating_card_profile2.png',
      '1236',
      20
    ),
    new Cv(
      4,
      'WEILL',
      'Laurent',
      'Dev',
      'rotating_card_profile3.png',
      '12358',
      20
    ),
    new Cv(
      5,
      'RIBARDIERE',
      'Paul-Emmanuel',
      'Dev',
      'rotating_card_profile2.png',
      '12359',
      20
    ),
    new Cv(
      6,
      'FAUGAS',
      'Axel',
      'Dev',
      'rotating_card_profile3.png',
      '123510',
      20
    ),
    new Cv(
      7,
      'SNEIG',
      'Vincent',
      'Dev',
      'rotating_card_profile2.png',
      '123511',
      20
    ),
    new Cv(
      8,
      'LAFFANI',
      'Yassir',
      'Dev',
      'rotating_card_profile3.png',
      '123512',
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
