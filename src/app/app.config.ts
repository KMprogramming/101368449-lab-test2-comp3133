import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Update the import statement
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import withFetch

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), // Use withFetch
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync()
  ]
};
