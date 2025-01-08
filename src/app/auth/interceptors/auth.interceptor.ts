import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_CONST } from 'src/app/config/app-constantes.config';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authService = inject(AuthService);
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const params = new HttpParams().set(APP_CONST.accesTokenParamName, this.authService.getToken())
    // const headers = new HttpHeaders().set(, )
    if (this.authService.isAuthenticated()) {
      const cloneReq = request.clone({
        setHeaders: {
            [APP_CONST.authorizationHeader]: this.authService.getToken()
        }
      });
      return next.handle(cloneReq);
    }
    return next.handle(request);
  }
}

export const authHttpInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}
