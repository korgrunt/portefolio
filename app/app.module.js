/*LE ROOT MODULE ? QUI EST BOOTSRAPER DANS MAIN.TS*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports dependencies
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
// Imports component
var app_component_1 = require('./components/app.component');
/* Portefolio macro-component*/
var header_component_1 = require('./components/macro/header.component');
var footer_component_1 = require('./components/macro/footer.component');
var common_1 = require('@angular/common');
/* Portefolio component*/
var contact_component_1 = require('./components/contact.component');
var src_component_1 = require('./components/src.component');
var home_component_1 = require('./components/home.component');
var realisation_component_1 = require('./components/realisation.component');
var tuto_component_1 = require('./components/tuto.component');
var profile_component_1 = require('./components/profile.component');
// Imports routing
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing
            ],
            providers: [],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                contact_component_1.ContactComponent,
                src_component_1.SrcComponent,
                home_component_1.HomeComponent,
                realisation_component_1.RealisationComponent,
                tuto_component_1.TutoComponent,
                profile_component_1.ProfileComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map