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
/*
film d'animation personnel
film d'animation pour entreprise
charactere design perso
simulation 3d archi
*/
var HEROES = [
    { id: '01', name: 'Film d\'animation perso.', description: 'Animation de poursuite en mobiliette via des calque dessin manuel scané, et animé dans un espace 3d.', imgPath: './app/pictures/work01.jpg' },
    { id: '02', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work02.jpg' },
    { id: '03', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work03.jpg' },
    { id: '04', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work05.jpg' },
    { id: '05', name: 'Film d\'animation en équipe.', description: 'Cours métrage science-fiction ou des bébé en 3d sont animé lors de leurs fabrication à la  chaine dans une uzine futuriste.', imgPath: './app/pictures/work06.jpg' },
    { id: '06', name: 'Charactere design', description: 'Une scéne de quelque seconde présentant un catcheur méxicain.', imgPath: './app/pictures/work04.jpg' },
    { id: '07', name: 'Projet du dimanche', description: 'Modélisation, texturing et lighting d\'une voiture vintage', imgPath: './app/pictures/realisation3d01.jpg' },
    { id: '08', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d05.jpg' },
    { id: '09', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d06.jpg' },
    { id: '10', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d07.jpg' },
    { id: '11', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d08.jpg' },
    { id: '12', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d09.jpg' },
    { id: '13', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d10.jpg' },
    { id: '14', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d11.jpg' },
    { id: '15', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d12.jpg' },
    { id: '16', name: 'Simulation désign d\'espace', description: 'Visuels pour la projection d\'un projet d\'architecture sur la zone de liége', imgPath: './app/pictures/realisation3d13.jpg' },
    { id: '17', name: 'Site web', description: 'Site web déstiné a présenté mes compétences et savoir faire.', imgPath: './app/pictures/realisationweb01.jpg' }
];
var RealisationComponent = (function () {
    function RealisationComponent() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
        this.image = './app/pictures/work06.jpg';
        this.heroes = HEROES;
    }
    RealisationComponent.prototype.ngOnInit = function () {
        document.title = "Naïm Aouaichia - Page Réalisations";
        document.getElementById("minimenu").style.display = 'none';
    };
    RealisationComponent.prototype.cardClicked = function () {
        var popup = document.createElement("div");
        var contentpopup = document.createElement("div");
        //var node = document.createTextNode("This is new.");
        //para.appendChild(node);
        popup.setAttribute("id", "mypopup");
        contentpopup.setAttribute("id", "contentpopup");
        popup.setAttribute("class", "container");
        var element = document.getElementById("div1");
        popup.appendChild(contentpopup);
        document.body.appendChild(popup);
        console.log("ouioui");
    };
    RealisationComponent = __decorate([
        core_1.Component({
            selector: 'realisation',
            templateUrl: 'app/components/realisation.component.html',
            styleUrls: ['app/components/realisation.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RealisationComponent);
    return RealisationComponent;
}());
exports.RealisationComponent = RealisationComponent;
//# sourceMappingURL=realisation.component.js.map