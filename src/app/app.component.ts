import { Component } from '@angular/core';

export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    }

const CONTACTS: Contact[] = [
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
