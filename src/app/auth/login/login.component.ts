import { Component, inject } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/app-routes.config';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule]
})
export class LoginComponent {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next:(response) => {
        if (response) {
          this.toastr.success('Bienvenu dans votre espace :)');
          this.router.navigate([APP_ROUTES.cv]);
        } else {
          this.toastr.error('Veuillez vérifier vos credentials')
        }
      }
    });
  }

}
