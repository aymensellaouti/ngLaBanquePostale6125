import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { APP_API } from 'src/app/config/app-api.config';
import { LoginResonseDto } from '../dto/login-response.dto';
import { APP_CONST } from 'src/app/config/app-constantes.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);

  login(credentials: CredentialsDto): Observable<boolean> {
    return this.http.post<LoginResonseDto>(APP_API.login,credentials).pipe(
      tap(response => {
        this.setToken(response.id);
      }),
      map(response => true),
      catchError(e => of(false))
    )
  }

  setToken(token: string): void {
    localStorage.setItem(APP_CONST.tokenName, token);
  }

  getToken(): string {
    return localStorage.getItem(APP_CONST.tokenName) ?? '';
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
