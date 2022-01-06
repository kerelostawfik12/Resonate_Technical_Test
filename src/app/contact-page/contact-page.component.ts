import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Model
import { ContactModel } from '../models/contact.model'

// Service
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-page',
  providers: [ContactsService],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contacts: ContactModel[];
  contact: ContactModel;

  constructor(
    private contactService: ContactsService, 
  ) 
  {
  }

  getContacts(): void{
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts);
  }

  ngOnInit() {
    this.getContacts();
  }

  getToContactView(){

  }

}
