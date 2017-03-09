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
        <h2>{{contact.firstName}} details!</h2>
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
