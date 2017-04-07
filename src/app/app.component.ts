import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1 class="title">{{title}}</h1>
        <my-contacts></my-contacts>
    `
})

export class AppComponent {
    title = 'Contact List';
}