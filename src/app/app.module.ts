import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContactsComponent }  from './contacts.component';

import { ContactDetailComponent } from './contact-detail.component';
import { ContactService } from './contact.service';

import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'contacts',
                component: ContactsComponent
            },
            {
                path: 'detail/:id',
                component: ContactDetailComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        ContactDetailComponent,
        ContactsComponent
    ],
    providers: [ ContactService ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
