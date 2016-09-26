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
var core_1 = require('@angular/core');
require('../rxjs-operators');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Aouaichia Naïm Portefolio';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <!-- Static header component goes here -->\n\n  <my-header></my-header>\n\n  <main class=\"mdl-layout__content\" width=\"100%\">\n  \t<div class=\"page-content\">\n  \t  <!-- Dynamic content goes here -->\n      <router-outlet></router-outlet>\n    </div>\n\t</main>\n\n  <!-- Static footer component goes here -->\n  <my-footer></my-footer>\n\n  ",
            styleUrls: ['app/components/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map