import { Injectable } from '@angular/core';

import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable()
export class contactSerivce {
    getContacts(): Contact[] {
        return CONTACTS;
    }
}