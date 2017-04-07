import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1 class="title">{{title}}</h1>
        <a routerLink="/contacts">Contacts</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Contact List';
}