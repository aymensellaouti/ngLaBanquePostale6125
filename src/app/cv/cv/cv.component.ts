import { Component } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';

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
    new Cv(3, 'VOIMENT', 'Henri', 'Dev', '', '1236', 20),
    new Cv(4, 'WEILL', 'Laurent', 'Dev', '           ', '12358', 20),
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
  today = new Date();
  /**
   * Le cv sélectionné dans la liste
   */
  selectedCv: Cv | null = null;
  //sayHelloService: SayHelloService = new SayHelloService();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.hello();
    this.loggerService.log('je suis le CvComonent');
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
