import { Component } from '@angular/core';

export class Contact {
    id: number;
    firstName: string;
    lastName: string;
    phone: number;
    }

const CONTACTS: Contact[] = [
    { id: 1, firstName: 'Armin', lastName: 'Eslami', phone: 6132779911 },
    { id: 2, firstName: 'Mike', lastName: 'Pellegrino', phone: 4165550191 },
    { id: 3, firstName: 'Rika', lastName: 'Erckens', phone: 4165550130 },
    { id: 4, firstName: 'Luciana', lastName: 'Teke', phone: 7805550119 },
    { id: 5, firstName: 'Nichola', lastName: 'Choudhary', phone: 7805550137 },
    { id: 6, firstName: 'Melpomeni', lastName: 'Gerber', phone: 9025550189 },
    { id: 7, firstName: 'Harding', lastName: 'Brankovic', phone: 9025550104 },
    { id: 8, firstName: 'Galena', lastName: 'Ma', phone: 2045550176 },
    { id: 9, firstName: 'Erich', lastName: 'Ellis', phone: 2045550131 },
    { id: 10, firstName: 'Sylvain', lastName: 'Callahan', phone: 6135550140 }
];

@Component({
    selector: 'my-app',
    template: `
        <h1 class="title">{{title}}</h1>
        <h2>My Contacts:</h2>
        <ul class="contacts">
            <li *ngFor="let contact of contacts">
                <span class="badge">{{contact.id}}</span> {{contact.firstName}}
            </li>
        </ul>
        `,
    styles: [`
        .title {
            color: #555;
        }
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .contacts {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .contacts li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            font-family: sans-serif;
        }
        .contacts li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .contacts li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .contacts .text {
            position: relative;
            top: -3px;
        }
        .contacts .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #666;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
        }
    `]
})
export class AppComponent {
    title = 'Contact List';
    contacts = CONTACTS;
}
