import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getStorage, provideStorage} from "@angular/fire/storage"
import {getAuth, provideAuth} from "@angular/fire/auth";
import {provideHttpClient} from "@angular/common/http";


const firebaseconfig ={
    apiKey: "AIzaSyCUFygHPOyIM6DH8k44ikgwmW4iGGJOrJY",
    authDomain: "portfolio-10ea0.firebaseapp.com",
    projectId: "portfolio-10ea0",
    storageBucket: "portfolio-10ea0.firebasestorage.app",
    messagingSenderId: "776569862100",
    appId: "1:776569862100:web:bd9da392eed813fd5b0841",
    measurementId: "G-3K0G63BVL0"
  }

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}),provideHttpClient(), provideRouter(routes), provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseconfig)), provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth())
  ]
};


