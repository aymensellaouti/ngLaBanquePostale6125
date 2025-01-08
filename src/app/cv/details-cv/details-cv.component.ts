import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "src/app/config/app-routes.config";
import { catchError, EMPTY, Observable, share } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  cvService = inject(CvService);
  router = inject(Router);
  toast = inject(ToastrService);
  acr = inject(ActivatedRoute);
  cv$: Observable<Cv> = this.cvService.findCvById(
    this.acr.snapshot.params['id']
  ).pipe(
    catchError(
      e => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      }
    )
  );
  constructor() {
    const id = this.acr.snapshot.params['id'];
    //this.cv = this.cvService.findCvById(+id);
    // Méthode 1
    // this.cvService.findCvById(id).subscribe({
    //   next: (cv) => this.cv = cv,
    //   error: (e) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   }
    // })
  }
  delete(cv: Cv) {
      this.cvService.deleteCv(cv).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toast.error(`Il y a un problème mercide contacter l'admin`)
          console.log(e);
        }
      });

  }
}
