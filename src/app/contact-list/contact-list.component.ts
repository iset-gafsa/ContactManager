import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor() {
    this.setMarkContact();
    this.setMarkContactStyle();
    this.createContact();
  }

  listContacts: Array<Contact> = new Array<Contact>();
  createContact() {
    let contact = new Contact("Ali", "Mohamed", "ali.mohamed@hotmail.com", "Freind", "Ami", "98559121");
    this.listContacts.push(contact);

    let contact2 = new Contact("Salah", "Belgacem", "salahm@gmail.com", "Freind", "Ami", "21366306");
    this.listContacts.push(contact2);

    let contact3 = new Contact("Meriem", "HAMMAMI", "meriem@topnet.com", "Family", "Ami", "21366306");
    this.listContacts.push(contact3);

    let contact4 = new Contact("SARRA", "HAMMAMI", "sarra@topnet.com", "Work", "Ami travail", "21366306");
    this.listContacts.push(contact4);

    //create 5 contacts
    /*for (let i = 1; i <= 5; i++) {
      let c = new Contact("First-"+i, "Last-"+i, "email@hotmail.com", "Freind", "Amis", "98559121");
      this.listContacts.push(c);
    }*/
  }

  isMarked = true;
  isFriendContact = true;
  isFamilyContact = false;
  isWorkContact = true;

  markContact: Record<string, boolean> = {};

  setMarkContact() {
    this.markContact = {
      freindContact: this.isFriendContact,
      familyContact: this.isFamilyContact,
      workContact: this.isWorkContact
    }
  }
  markContactStyle: Record<string, string> = {};

  setMarkContactStyle() {
    this.markContactStyle = {
      'font-style': this.isFriendContact ? 'italic' : 'normal',
      'font-weight': !this.isFamilyContact ? 'bold' : 'normal',
      'font-size': this.isWorkContact ? '24px' : '12px'
    }
  }

  ngOnInit(): void {
  }

  


}
