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
    let contact = new Contact(1,"Ali", "Mohamed", "ali.mohamed@XXX.com", "Freind", "Un ami", "98XXXXXX");
    this.listContacts.push(contact);

    let contact2 = new Contact(2,"Salah", "Belgacem", "salahm@XXX.com", "Freind", "Un ami", "21XXXXXX");
    this.listContacts.push(contact2);

    let contact3 = new Contact(3,"Meriem", "AHMED", "meriem@XXX.com", "Family", "Ma fille", "21XXXXXX");
    this.listContacts.push(contact3);

    let contact4 = new Contact(4,"Sarra", "AHMED", "meriem@XXX.com", "Family", "Ma fille", "55XXXXXX");
    this.listContacts.push(contact4);

    let contact5 = new Contact(5,"Raouf", "KHALED", "raouf@XXX.com", "Work", "Directeur de département", "21XXXXXX");
    this.listContacts.push(contact5);

    let contact6 = new Contact(6,"Fadhel", "MANSOUR", "fadhel@XXX.com", "Work", "Directeur", "21XXXXXX");
    this.listContacts.push(contact6);
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

  
  deleteContact(id:number):void{
    let index:number=-1;
    for(let c of this.listContacts){
      index = index+1;
      if(c.id==id){
        
        break;
      }
      
    }
    if(index!=-1){
      this.listContacts.splice(index,1);
    }
  }

}
