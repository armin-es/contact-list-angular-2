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
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;
var CONTACTS = [
    { id: 1, firstName: 'Armin', lastName: 'Eslami', phone: 6132779911 },
    { id: 2, firstName: 'Miroslav', lastName: 'Pellegrino', phone: 4165550191 },
    { id: 3, firstName: 'Rika', lastName: 'Erckens', phone: 4165550130 },
    { id: 4, firstName: 'Luciana', lastName: 'Teke', phone: 7805550119 },
    { id: 5, firstName: 'Nichola', lastName: 'Choudhary', phone: 7805550137 },
    { id: 6, firstName: 'Melpomeni', lastName: 'Gerber', phone: 9025550189 },
    { id: 7, firstName: 'Harding', lastName: 'Brankovic', phone: 9025550104 },
    { id: 8, firstName: 'Galena', lastName: 'Ma', phone: 2045550176 },
    { id: 9, firstName: 'Erich', lastName: 'Ellis', phone: 2045550131 },
    { id: 10, firstName: 'Sylvain', lastName: 'Callahan', phone: 6135550140 },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Contact List';
        this.contact = {
            id: 1,
            firstName: 'Armin',
            lastName: 'Eslami',
            phone: 6132779911,
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{contact.firstName}} details:</h2>\n        <div>\n            <label>id: </label>{{contact.id}}\n        </div>\n        <div>\n            <label>first name: </label>\n            <input [(ngModel)]=\"contact.firstName\" placeholder=\"first name\">\n        </div>\n        <div>\n            <label>last name: </label>\n            <input value=\"{{contact.lastName}}\" placeholder=\"last name\">\n        </div>\n        <div>\n            <label>phone: </label>\n            <input value=\"{{contact.phone}}\" placeholder=\"phone\">\n        </div>\n        ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map