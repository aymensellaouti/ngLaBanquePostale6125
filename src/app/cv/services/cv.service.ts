import {  inject, Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/app-api.config';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_CONST } from 'src/app/config/app-constantes.config';


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

  #selectCvSubject$ = new Subject<Cv>();
  /**
   * Le flux des cvs sélectionnés
   *
   * Cv1 CV2 CV1 CV5 .....
   */
  selectCv$ = this.#selectCvSubject$.asObservable();

  http = inject(HttpClient);

  authService = inject(AuthService);
  /**
   * Retourne la liste des fake cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.#cvs;
  }

  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findFakeCvById(id: number): Cv | null {
    return this.#cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteFakeCv(cv: Cv): boolean {
    const index = this.#cvs.indexOf(cv);
    if (index > -1) {
      this.#cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): Observable<{count: number}> {
      return this.http.delete<{ count: number }>(APP_API.cv + cv.id);
  }

  /**
   * Ajouter un cv dans le flux des cvs sélectionnés
   *
   * @param cv : Cv le cv a ajouter dans le flux
   */
  selectCv(cv: Cv) {
    this.#selectCvSubject$.next(cv);
  }
}
