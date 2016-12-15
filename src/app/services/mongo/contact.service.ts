import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contact } from '../../models/contact';

@Injectable()
export class ContactService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8', 'Access-Control-Allow-Origin': '*' });
  private options = new RequestOptions({ headers: this.headers });

  // private instance variable to hold base url
  private contactsUrl = 'http://127.0.0.1:3000/contacts';

  constructor(private http: Http) { }

  // get all contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get(this.contactsUrl).map(res => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Add a new contact
  addContact(contact: Contact): Observable<Contact[]> {
    let contactString = JSON.stringify(contact);

    return this.http.post(this.contactsUrl, contactString, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Update a comment
  editContact(contact: Contact): Observable<Contact[]> {
    let contactString = JSON.stringify(contact);

    return this.http.put(`${this.contactsUrl}/${contact['_id']}`, contactString, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // Delete a comment
  deleteContact(contact: Contact): Observable<Contact[]> {
    return this.http.delete(`${this.contactsUrl}/${contact['_id']}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
