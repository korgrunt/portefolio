/*LE ROOT MODULE ? QUI EST BOOTSRAPER DANS MAIN.TS*/

// Imports dependencies
import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
// Imports component
import { AppComponent }         from './components/app.component';

/* Portefolio macro-component*/
import { HeaderComponent }     from './components/macro/header.component';
import { FooterComponent }     from './components/macro/footer.component';

import { CommonModule } from '@angular/common';

/* Portefolio component*/
import { ContactComponent }     from './components/contact.component';
import { SrcComponent }     from './components/src.component';
import { HomeComponent }     from './components/home.component';
import { RealisationComponent }     from './components/realisation.component';
import { TutoComponent }     from './components/tuto.component';
import { ProfileComponent }     from './components/profile.component';

// Imports routing
import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SrcComponent,
    HomeComponent,
    RealisationComponent,
    TutoComponent,
    ProfileComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
