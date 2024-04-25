import { ApplicationConfig } from '@angular/core';

import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';

// Import the routes from app.routes.ts
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // Use provideRouter to provide the routes
    provideRouter(routes), 
    // Provide client hydration
    provideClientHydration(),
    provideHttpClient(withFetch())

  ]
};
