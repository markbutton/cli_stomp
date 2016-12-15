import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { ContactService } from '../../services/mongo/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contacts = [];
  private isLoading = true;

  private contact = {};
  private isEditing = false;

  private addContactForm: FormGroup;
  private firstName = new FormControl('', Validators.required);
  private lastName = new FormControl('', Validators.required);
  private phoneNumber = new FormControl('', Validators.required);
  private address = new FormControl('', Validators.required);

  constructor(private http: Http,
              private contactService: ContactService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getContacts();

    this.addContactForm = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      address: this.address
    });
  }

  getContacts() {
    this.contactService.getContacts().subscribe(
      data => this.contacts = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addContact() {
    this.contactService.addContact(this.addContactForm.value).subscribe(
      res => {
        let newContact = res.toString; // .json();
        this.contacts.push(newContact);
        this.addContactForm.reset();
        // this.toast.setMessage("item added successfully.", "success");
      },
      error => console.log(error)
    );
  }

  enableEditing(contact) {
    this.isEditing = true;
    this.contact = contact;
  }

  cancelEditing() {
    this.isEditing = false;
    this.contact = {};
    // this.toast.setMessage("item editing cancelled.", "warning");
    // reload the contacts to reset the editing
    this.getContacts();
  }

  editContact(contact) {
    this.contactService.editContact(contact).subscribe(
      res => {
        this.isEditing = false;
        this.contact = contact;
        // this.toast.setMessage("item edited successfully.", "success");
      },
      error => console.log(error)
    );
  }

  deleteContact(contact) {
    if(window.confirm('Are you sure you want to permanently delete this item?')) {
      this.contactService.deleteContact(contact).subscribe(
        res => {
          let pos = this.contacts.map(contact => { return contact._id }).indexOf(contact._id);
          this.contacts.splice(pos, 1);
          // this.toast.setMessage("item deleted successfully.", "success");
        },
        error => console.log(error)
      );
    }
  }

}
