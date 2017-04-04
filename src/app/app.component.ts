import { Component } from '@angular/core';

import { Contact } from './contact';

import { ContactService } from './contact.service';

@Component({
    selector: 'my-app',
    template: `
        <h1 class="title">{{title}}</h1>
        <h2>My Contacts:</h2>
        <ul class="contacts">
            <li *ngFor="let contact of contacts"
            [class.selected]="contact === selectedContact"
            (click)="onSelect(contact)">
                <span class="badge">{{contact.id}}</span> {{contact.firstName}}
            </li>
        </ul>

        <my-contact-detail [contact]="selectedContact"></my-contact-detail>
        `,
    styles: [`
        .title {
            color: #555;
        }
        .selected {
            background-color: #888 !important;
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
            background-color: #aaa !important;
            color: white;
        }
        .contacts li:hover {
            color: #555;
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
    `],
    providers: [ContactService]
})
export class AppComponent {

    constructor(private contactService: ContactService) {}

    title = 'Contact List';
    contacts: Contact[];
    selectedContact: Contact;
    onSelect(contact: Contact): void {
        this.selectedContact = contact;
    }
}
