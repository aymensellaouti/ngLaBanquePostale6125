import { Component, inject } from '@angular/core';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [
    RouterLinkActive,
    RouterLink
],
})
export class NavbarComponent {
  routes = APP_ROUTES;
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }
}
