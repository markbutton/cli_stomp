import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { List } from 'immutable';
import { Contact } from '../../models/contact';

@Injectable()
export class ContactService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8', 'Access-Control-Allow-Origin': '*' });
  private options = new RequestOptions({ headers: this.headers });

  // private instance variable to hold base url
  private contactsUrl = 'http://127.0.0.1:3000/contacts';

  constructor(private http: Http) { }

  // get all contacts
  getContacts() {
    return this.http.get(this.contactsUrl).map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Add a new contact
  addContact(newContact: Contact): Observable<any> {
    let contactString = JSON.stringify(newContact);

    return this.http.post(this.contactsUrl, contactString, this.options).share()
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Update a contact
  editContact(updatedContact: Contact): Observable<List<Contact>> {
    let contactString = JSON.stringify(updatedContact);

    return this.http.put(`${this.contactsUrl}/${updatedContact['_id']}`, contactString, this.options).share()
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Delete a contact
  deleteContact(deletedContact: Contact) {
    return this.http.delete(`${this.contactsUrl}/${deletedContact['_id']}`).share()
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
