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
        <div><label>id: </label>{{contact.id}}</div>
        <div><label>first name: </label>{{contact.firstName}}</div>
        <div><label>last name: </label>{{contact.lastName}}</div>
        <div><label>phone: </label>{{contact.phone}}</div>
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
