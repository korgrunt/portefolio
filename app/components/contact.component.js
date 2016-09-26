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
var router_1 = require('@angular/router');
var wikipedia_service_1 = require('../services/wikipedia.service');
var email_service_1 = require('../services/email.service');
require('../rxjs-operators');
var EMAILOBJECT = (function () {
    function EMAILOBJECT() {
    }
    return EMAILOBJECT;
}());
exports.EMAILOBJECT = EMAILOBJECT;
var ContactComponent = (function () {
    /*constructor (private wikipediaService: WikipediaService) {}
  */
    /* START GOOD CONSTRUCTOR FROM OKEY COMPONANT OFFICIAL*/
    function ContactComponent(emailService, router) {
        this.emailService = emailService;
        this.router = router;
        /* END GOOD CONSTRUCTOR FROM OKEY COMPONANT OFFICIAL*/
        this.emailPack = {
            mail: '',
            sujet: '',
            msg: ''
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        document.title = "Naïm Aouaichia - Page Contact";
        document.getElementById("minimenu").style.display = 'none';
    };
    /* ADD FROM OKEY COMPONANT OFFICIAL*/
    ContactComponent.prototype.popUp = function () {
        var isFind = document.getElementById('popUpHere');
        if (isFind) {
            isFind.parentNode.removeChild(isFind);
        }
        else {
            var popup = document.createElement('div');
            popup.className = 'popup';
            popup.id = 'popUpHere';
            var cancel = document.createElement('div');
            cancel.className = 'cancel';
            cancel.innerHTML = 'close';
            cancel.onclick = function (e) { popup.parentNode.removeChild(popup); };
            var message = document.createElement('span');
            message.innerHTML = "This is a test message";
            popup.appendChild(message);
            popup.appendChild(cancel);
            document.body.appendChild(popup);
        }
    };
    ContactComponent.prototype.send = function (email, sujet, msg) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(re.test(email))) {
            console.log("etrer une adress correct");
            document.getElementById("email-input").style.display = 'block';
        }
        else if (!(sujet.length >= 1)) {
            console.log("entrer un sujet pour carifier votre demande");
            document.getElementById("email-input").style.display = 'none';
            document.getElementById("sujet-input").style.display = 'block';
        }
        else if (!(msg.length >= 10)) {
            console.log("ecriver votre demande");
            document.getElementById("email-input").style.display = 'none';
            document.getElementById("sujet-input").style.display = 'none';
            document.getElementById("message-input").style.display = 'block';
        }
        else {
            if (re.test(email) && sujet.length >= 1 && msg.length >= 10) {
                document.getElementById("email-input").style.display = 'none';
                document.getElementById("sujet-input").style.display = 'none';
                document.getElementById("message-input").style.display = 'none';
                this.items = this.emailService.xhrSender(email, sujet, msg); //statements suspected to throw exception.
                console.log(this.items);
                setTimeout(function () { document.getElementById("email-send").style.display = 'block'; }, 700);
                //var that=this;
                setTimeout(function () {
                    //that.router.navigate(['/home']);
                    console.log("mail envoyer");
                }, 5000);
            }
            else {
                console.log("Une erreur est survenu, veuillez recommencer ou attendre u peu, si urgence, contacter moi au 0625582270");
            }
        }
        /*
        console.log(this.emailService.sender("atest"));
  */
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            templateUrl: 'app/components/contact.component.html',
            styleUrls: ['app/components/contact.component.css'],
            providers: [wikipedia_service_1.WikipediaService,
                email_service_1.EmailService]
        }), 
        __metadata('design:paramtypes', [email_service_1.EmailService, router_1.Router])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=contact.component.js.map