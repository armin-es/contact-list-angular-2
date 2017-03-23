import { Component, Input } from '@angular/core';

import { Contact } from './contact';

@Component({
    selector: 'my-contact-detail',

    template: `
        <div *ngIf="contact">
            <h2>{{contact.firstName}} details:</h2>
            <div>
                <label>id: </label>{{contact.id}}
            </div>
            <div>
                <label>first name: </label>
                <input [(ngModel)]="contact.firstName" placeholder="first name">
            </div>
            <div>
                <label>last name: </label>
                <input value="{{contact.lastName}}" placeholder="last name">
            </div>
            <div>
                <label>phone: </label>
                <input value="{{contact.phone}}" placeholder="phone">
            </div>
        </div>
    `
})

export class ContactDetailComponent {
    @Input()
    contact: Contact;
}