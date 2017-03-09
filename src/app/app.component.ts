import { Component } from '@angular/core';

export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    }

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{contact.firstName}} details:</h2>
        <div>
            <label>id: </label>{{contact.id}}
        </div>
        <div>
            <label>first name: </label>
            <input value="{{contact.firstName}}" placeholder="first name">
        </div>
        <div>
            <label>last name: </label>
            <input value="{{contact.lastName}}" placeholder="last name">
        </div>
        <div>
            <label>phone: </label>
            <input value="{{contact.phone}}" placeholder="phone">
        </div>
        `,
})
export class AppComponent {
    title = 'Contact List';
    contact: Contact = {
        id: 1,
        firstName: 'Armin',
        lastName: 'Eslami',
        phone: 6132779911,
    };
}
