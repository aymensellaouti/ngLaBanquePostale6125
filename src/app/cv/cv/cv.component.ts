import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { catchError, Observable, of } from 'rxjs';
import { AsyncPipe, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { ListCvsComponent } from '../list-cvs/list-cvs.component';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { BtcToUsdPipe } from '../../pipes/btc-to-usd.pipe';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    standalone: true,
    imports: [
    ListCvsComponent,
    CvCardComponent,
    EmbaucheComponent,
    AsyncPipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    BtcToUsdPipe
],
})
export class CvComponent {
  private loggerService = inject(LoggerService);
  private sayHelloService = inject(SayHelloService);

  cvService = inject(CvService);
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    catchError(e => {
      // Todo
      this.toastr.error(`LEs données sont fictives merci de contacter l'admin`);
      return of(this.cvService.getFakeCvs());
    })
  );
  today = new Date();
  selectedCv$ = this.cvService.selectCv$
  selectedCvSignal = this.cvService.selectedCv;
  /**
   * Le cv sélectionné dans la liste
   */
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr: ToastrService = inject(ToastrService);

  //sayHelloService: SayHelloService = new SayHelloService();
  constructor() {
    this.sayHelloService.hello();
    this.loggerService.log('je suis le CvComonent');
    this.toastr.info('Bienvenu :)');
    // this.cvService.getCvs().subscribe({
    //   next: (cvsFromApi) => this.cvs = cvsFromApi,
    //   error: (e) => {
    //     this.cvs = this.cvService.getFakeCvs();
    //     this.toastr.error(`LEs données sont fictives merci de contacter l'admin`)
    //   }
    // })
    //this.cvService.selectCv$.subscribe({next: (cv) => {this.selectedCv = cv}})
  }
}
