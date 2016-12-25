import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { ContactStore } from '../../store/contact.store';
import { Contact } from '../../models/contact';
import { Alert } from '../../models/alert';
import { AlertStore } from '../../store/alert.store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  // Stream of contacts
  private contacts: Observable<List<Contact>>;
  private contact: Contact;

  // TODO: Refactor to state controller
  private isLoading = true;
  private isEditing = false;

  private addContactForm: FormGroup;
  private firstName = new FormControl('', Validators.required);
  private lastName = new FormControl('', Validators.required);
  private phoneNumber = new FormControl('', Validators.required);
  private address = new FormControl('', Validators.required);

  constructor(private http: Http,
    private formBuilder: FormBuilder,
    private contactStore: ContactStore,
    private alertStore: AlertStore) { }

  ngOnInit() {
    // Subscribe to the Model
    this.contacts = this.contactStore.contacts;
    this.isLoading = false;
    // this.getContacts();

    this.addContactForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      address: this.address
    });
  }

  enableEditing(contact) {
    this.isEditing = true;
    this.contact = contact;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  addContact() {
    this.contactStore.addContact(this.addContactForm.value);
    this.addContactForm.reset();
    let alert: Alert = new Alert(this.alertStore.getAlertId(), 'success', 'Success', 'The contact has been added');
    this.alertStore.sendAlert(alert);
  }

  editContact(contact) {
    this.contactStore.editContact(contact);
    this.isEditing = false;
    let alert: Alert = new Alert(this.alertStore.getAlertId(), 'success', 'Success', 'The contact has been saved');
    this.alertStore.sendAlert(alert);
  }

  deleteContact(contact) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.contactStore.deleteContact(contact);
      let alert: Alert = new Alert(this.alertStore.getAlertId(), 'success', 'Success', 'The contact has been deleted');
      this.alertStore.sendAlert(alert);
    }
  }

}
