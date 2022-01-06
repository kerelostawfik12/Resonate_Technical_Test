import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactModel } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-view',
  providers: [ContactsService],
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact: ContactModel;
  contacts: ContactModel[];
  id: number;

  constructor(
    private contactService: ContactsService,
    private _route: ActivatedRoute,
  ) { }




  ngOnInit() {
    this.id = this._route.snapshot.params['name'];
  }

  imgSrcById(){
    let src = "../../assets/" +  this.id + ".jpg"
    return src;
  }



}
