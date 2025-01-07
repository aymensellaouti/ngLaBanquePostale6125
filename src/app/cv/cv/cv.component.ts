import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
  today = new Date();
  /**
   * Le cv sélectionné dans la liste
   */
  selectedCv: Cv | null = null;
  todoService = inject(TodoService);
  toastr: ToastrService = inject(ToastrService);
  //sayHelloService: SayHelloService = new SayHelloService();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.hello();
    this.loggerService.log('je suis le CvComonent');
    this.toastr.info('Bienvenu :)')
  }

}
