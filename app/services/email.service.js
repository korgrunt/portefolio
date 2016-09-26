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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EmailService = (function () {
    function EmailService(jsonp) {
        this.jsonp = jsonp;
    }
    EmailService.prototype.search = function (term) {
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        var params = new http_1.URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    EmailService.prototype.sender = function (term) {
        var myUrli = 'http://91.134.134.160:80/email';
        var theParams = new http_1.URLSearchParams();
        theParams.set('search', term); // the user's search value
        theParams.set('action', 'opensearch');
        theParams.set('format', 'json');
        theParams.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(myUrli, { search: theParams })
            .map(function (response) { return response.json()[1]; });
    };
    EmailService.prototype.xhrSender = function (email, sujet, msg) {
        var xhr = new XMLHttpRequest();
        var urlSend = "http://91.134.134.160:80/email/" + email + "/" + sujet + "/" + msg + "";
        xhr.open("GET", urlSend, true);
        xhr.send();
        return "email sending successfully!";
    };
    EmailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp])
    ], EmailService);
    return EmailService;
}());
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map