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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Contact List';
    }
    AppComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1 class=\"title\">{{title}}</h1>\n        <h2>My Contacts:</h2>\n        <ul class=\"contacts\">\n            <li *ngFor=\"let contact of contacts\"\n            [class.selected]=\"contact === selectedContact\"\n            (click)=\"onSelect(contact)\">\n                <span class=\"badge\">{{contact.id}}</span> {{contact.firstName}}\n            </li>\n        </ul>\n\n        <my-contact-detail [contact]=\"selectedContact\"></my-contact-detail>\n        ",
            styles: ["\n        .title {\n            color: #555;\n        }\n        .selected {\n            background-color: #888 !important;\n            color: white;\n        }\n        .contacts {\n            margin: 0 0 2em 0;\n            list-style-type: none;\n            padding: 0;\n            width: 15em;\n        }\n        .contacts li {\n            cursor: pointer;\n            position: relative;\n            left: 0;\n            background-color: #EEE;\n            margin: .5em;\n            padding: .3em 0;\n            height: 1.6em;\n            font-family: sans-serif;\n        }\n        .contacts li.selected:hover {\n            background-color: #aaa !important;\n            color: white;\n        }\n        .contacts li:hover {\n            color: #555;\n            background-color: #DDD;\n            left: .1em;\n        }\n        .contacts .text {\n            position: relative;\n            top: -3px;\n        }\n        .contacts .badge {\n            display: inline-block;\n            font-size: small;\n            color: white;\n            padding: 0.8em 0.7em 0 0.7em;\n            background-color: #666;\n            line-height: 1em;\n            position: relative;\n            left: -1px;\n            top: -4px;\n            height: 1.8em;\n            margin-right: .8em;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map