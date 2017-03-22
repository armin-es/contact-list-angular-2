import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-contact-detail',

    template: `
        <div *ngIf="selectedContact">
            <h2>{{selectedContact.firstName}} details:</h2>
            <div>
                <label>id: </label>{{selectedContact.id}}
            </div>
            <div>
                <label>first name: </label>
                <input [(ngModel)]="selectedContact.firstName" placeholder="first name">
            </div>
            <div>
                <label>last name: </label>
                <input value="{{selectedContact.lastName}}" placeholder="last name">
            </div>
            <div>
                <label>phone: </label>
                <input value="{{selectedContact.phone}}" placeholder="phone">
            </div>
        </div>
})

export class ContactDetailComponent {

}