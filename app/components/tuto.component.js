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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 11, name: 'tuto maxwell render' },
    { id: 12, name: 'tuto 3dsmax' },
    { id: 12, name: 'tuto modelisation 3dsmax' },
    { id: 20, name: 'tuto 3d' }
];
var TutoComponent = (function () {
    function TutoComponent() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
        this.image = './app/pictures/work06.jpg';
        this.heroes = HEROES;
    }
    TutoComponent.prototype.ngOnInit = function () {
        document.title = "Naïm Aouaichia - Page Tutos";
        document.getElementById("minimenu").style.display = 'none';
    };
    TutoComponent = __decorate([
        core_1.Component({
            selector: 'tuto',
            templateUrl: 'app/components/tuto.component.html',
            styleUrls: ['app/components/tuto.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TutoComponent);
    return TutoComponent;
}());
exports.TutoComponent = TutoComponent;
//# sourceMappingURL=tuto.component.js.map