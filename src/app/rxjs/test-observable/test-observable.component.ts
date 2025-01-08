import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-test-observable',
    templateUrl: './test-observable.component.html',
    styleUrls: ['./test-observable.component.css'],
    standalone: true,
    imports: [AsyncPipe],
})
export class TestObservableComponent {
  observable$: Observable<number>;
  toastr = inject(ToastrService);
  constructor() {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable$.subscribe((val) => {
      console.log(val);
    });
    // setTimeout(() => {
      this.observable$
      // 5 4 3 2 1
      .pipe(
        map(value => value * 3),
        // 15 12 9 6 3
        filter(data => !(data % 2)),
        // 12 6
      )
      .subscribe({
        next: (data) => {
          this.toastr.info('' + data);
        },
        complete: () => {
          this.toastr.error(
            'FIN DU COMPTE A REBOURS O VIENT VOUS CHERCHER FUYERRRRR'
          );
        },
      });
    // }, 3000);
  }
}
