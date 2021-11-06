import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  @Input() contact : Contact;
  @Input() index : number;

  @Output() deleteEvent= new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteContact(): void {
    let reponse = confirm("Voulez-vous supprimer le contact"+this.contact.id);
    if (reponse) {
      this.deleteEvent.emit(this.contact.id);
      alert("Contact Supprimé");
    } else {
      alert("Action annulé");
    }
  }
}
