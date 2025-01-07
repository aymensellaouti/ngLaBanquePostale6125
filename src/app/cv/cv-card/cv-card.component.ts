import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input()
  cv: Cv | null = null;
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if (!this.embaucheService.embaucher(this.cv)) {
        this.toastr.warning(`Le cv ${this.cv.name} est déjà pré selcetionné`)
      } else {
        this.toastr.success(`Le cv ${this.cv.name} est bien embauché`);
      }
    }
  }

}
