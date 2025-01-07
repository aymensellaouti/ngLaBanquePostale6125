import { Component, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
  <p> je suis le second component  </p>
  `,
  styles: [`
  `]
})
export class SecondComponent {
  acr = inject(ActivatedRoute);

}
