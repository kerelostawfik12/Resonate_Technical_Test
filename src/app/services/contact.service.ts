import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: ContactModel[];

  getContacts(): ContactModel[]{
    return this.contacts;
  }
}
