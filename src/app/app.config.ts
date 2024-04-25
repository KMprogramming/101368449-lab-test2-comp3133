import { ApplicationConfig } from '@angular/core';
<<<<<<< HEAD
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
=======
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
>>>>>>> 0effcecf7b82d55c891014998116a6ce47795d79
  ]
};
