import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';

import { Toast } from '../../models/toast';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ContactStore } from '../../store/contact.store';
import { Contact } from '../../models/contact';

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
  // TODO: Create seperate toaster controller and observable store
  private toast: Toast;

  private addContactForm: FormGroup;
  private firstName = new FormControl('', Validators.required);
  private lastName = new FormControl('', Validators.required);
  private phoneNumber = new FormControl('', Validators.required);
  private address = new FormControl('', Validators.required);

  constructor(private http: Http,
    private formBuilder: FormBuilder,
    private _toasterService: ToasterService,
    private contactStore: ContactStore) { }

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
  }

  editContact(contact) {
    this.contactStore.editContact(contact);
    this.isEditing = false;
  }

  deleteContact(contact) {
    if (window.confirm('Are you sure you want to permanently delete this item?')) {
      this.contactStore.deleteContact(contact);
    }
  }

}
