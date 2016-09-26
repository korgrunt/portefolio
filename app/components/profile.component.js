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
var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        console.log("we init the component now");
        document.title = "Naïm Aouaichia - Page Profile";
        document.getElementById("section-info3d").style.display = 'none';
        document.getElementById("section-info2d").style.display = 'none';
        document.getElementById("section-dev").style.display = 'none';
        document.getElementById("section-collab").style.display = 'none';
        document.getElementById("minimenu").style.display = 'none';
    };
    /* ADD FROM OKEY COMPONANT OFFICIAL*/
    ProfileComponent.prototype.btnClicked = function (btnclicked, clicked, noClicked1, noClicked2, noClicked3) {
        document.getElementById("fleche").style.opacity = '0';
        document.getElementById("btn2d").style.opacity = '1';
        document.getElementById("btn3d").style.opacity = '1';
        document.getElementById("btnDev").style.opacity = '1';
        document.getElementById("btnCollab").style.opacity = '1';
        document.getElementById(btnclicked).style.opacity = '0.4';
        document.getElementById(clicked).style.display = 'block';
        document.getElementById(noClicked1).style.display = 'none';
        document.getElementById(noClicked2).style.display = 'none';
        document.getElementById(noClicked3).style.display = 'none';
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            templateUrl: 'app/components/profile.component.html',
            styleUrls: ['app/components/profile.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map