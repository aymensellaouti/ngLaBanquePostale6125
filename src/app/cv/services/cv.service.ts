import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = [
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

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }
}
