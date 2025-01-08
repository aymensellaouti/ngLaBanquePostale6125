import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FormsModule, // required animations module
        ToastrModule.forRoot()),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(routes)
    ]
})
  .catch(err => console.error(err));
