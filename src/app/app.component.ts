import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{contact}} details!</h2>
        `,
})
export class AppComponent {
    title = 'Contact List';
    contact = 'Armin Eslami';
}
