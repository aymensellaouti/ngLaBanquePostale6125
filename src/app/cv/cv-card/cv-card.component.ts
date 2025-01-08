import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
    selector: 'app-cv-card',
    templateUrl: './cv-card.component.html',
    styleUrls: ['./cv-card.component.css'],
    standalone: true,
    imports: [NgIf, RouterLink, DefaultImagePipe]
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
