import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContactModel } from '../models/contact.model';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
}

@Injectable()
export class ContactsService {
    private contactsUrl:  string = "https://jsonplaceholder.typicode.com/users"
    constructor(
        private  http: HttpClient
    ){}

    getContacts(): Observable<ContactModel[]>{
        return this.http.get<ContactModel[]>(this.contactsUrl)
    }

    getContact(id: number): Observable<ContactModel>{
        return this.http.get<ContactModel>(`${this.contactsUrl}/${id}`)
    }
}