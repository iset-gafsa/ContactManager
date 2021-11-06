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
  /**
   * Create fake contact list
   */
  createContact() {
    let contact = new Contact("Ali", "Mohamed", "ali.mohamed@XXX.com", "Freind", "Un ami", "98XXXXXX");
    this.listContacts.push(contact);

    let contact2 = new Contact("Salah", "Belgacem", "salahm@XXX.com", "Freind", "Un ami", "21XXXXXX");
    this.listContacts.push(contact2);

    let contact3 = new Contact("Meriem", "AHMED", "meriem@XXX.com", "Family", "Ma fille", "21XXXXXX");
    this.listContacts.push(contact3);

    let contact4 = new Contact("Sarra", "AHMED", "meriem@XXX.com", "Family", "Ma fille", "55XXXXXX");
    this.listContacts.push(contact4);

    let contact5 = new Contact("Raouf", "KHALED", "raouf@XXX.com", "Work", "Directeur de département", "21XXXXXX");
    this.listContacts.push(contact5);

    let contact6 = new Contact("Fadhel", "MANSOUR", "fadhel@XXX.com", "Work", "Directeur", "21XXXXXX");
    this.listContacts.push(contact6);

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
