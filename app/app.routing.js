"use strict";
var router_1 = require('@angular/router');
/* Portefolio component*/
var contact_component_1 = require('./components/contact.component');
var src_component_1 = require('./components/src.component');
var home_component_1 = require('./components/home.component');
var realisation_component_1 = require('./components/realisation.component');
var tuto_component_1 = require('./components/tuto.component');
var profile_component_1 = require('./components/profile.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'realisation',
        component: realisation_component_1.RealisationComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: 'tuto',
        component: tuto_component_1.TutoComponent
    },
    {
        path: 'src',
        component: src_component_1.SrcComponent
    },
    {
        path: '*',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.routing.js.map