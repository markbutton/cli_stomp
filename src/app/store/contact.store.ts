import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { Contact } from '../models/contact';
import { ContactService } from '../services/mongo/contact.service';

@Injectable()
export class ContactStore {
    // Stream of observable contacts
    private _contacts: BehaviorSubject<List<Contact>> = new BehaviorSubject(List([]));
    public contacts: Observable<List<Contact>> = this._contacts.asObservable();

    /** Constructor load initial data from MONGO **/
    constructor(private contactService: ContactService) {
        this.loadInitialData();
    }

    private loadInitialData() {
        // Get contacts and subscribe
        this.contactService.getContacts()
            .subscribe(
            res => {
                let contacts = res;
                this._contacts.next(contacts);
            },
            err => console.log('Error retrieving Contacts')
            );
    }

    public addContact(newContact: Contact): Observable<any> {
        // create an observable variable
        let obs: Observable<any> = this.contactService.addContact(newContact);
        // subscribe to the observable handle response and error
        obs.subscribe(
                res => {
                    let contacts: List<Contact> = this._contacts.getValue();
                    contacts.push(newContact);
                    this._contacts.next(contacts);
                },
                error => {
                    // log add error
                    console.log(error + ': Add Operation Failed');
                }
            );
        return obs;
    }

    public editContact(updatedContact: Contact): Observable<any> {
        // create an observable variable
        let obs: Observable<any> = this.contactService.editContact(updatedContact);
        // subscribe to the observable handle response and error
        obs.subscribe(
                res => {
                    let contacts: List<Contact> = this._contacts.getValue();
                    let index = contacts.findIndex((contact) => contact._id === updatedContact._id);
                    contacts[index] = updatedContact;
                    this._contacts.next(contacts);
                },
                error => {
                    // log edit error
                    console.log(error + ': Edit Operation Failed');
                }
            );

        return obs;
    }

    public deleteContact(deletedContact: Contact): Observable<any> {
        // create an observable variable
        let obs: Observable<any> = this.contactService.deleteContact(deletedContact);
        // subscribe to the observable handle response and error
        obs.subscribe(
                res => {
                    let contacts: List<Contact> = this._contacts.getValue();
                    let index = contacts.findIndex((contact) => contact._id === deletedContact._id);
                    contacts.splice(index, 1);
                    this._contacts.next(contacts);
                },
                error => {
                    // log delete error
                    console.log(error + ': Delete Operation Failed');
                }
            );

        return obs;
    }

}
