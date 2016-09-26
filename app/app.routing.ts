import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Portefolio macro-component*/
import { HeaderComponent }     from './components/macro/header.component';
import { FooterComponent }     from './components/macro/footer.component';

/* Portefolio component*/
import { ContactComponent }     from './components/contact.component';
import { SrcComponent }     from './components/src.component';
import { HomeComponent }     from './components/home.component';
import { RealisationComponent }     from './components/realisation.component';
import { TutoComponent }     from './components/tuto.component';
import { ProfileComponent }     from './components/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'realisation',
    component: RealisationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'tuto',
    component: TutoComponent
  },
  {
    path: 'src',
    component: SrcComponent
  },
  {
    path: '*',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
