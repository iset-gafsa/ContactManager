import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private user: string = "Hi Walid";
  
  isConnected = true;

  imgAltText = 'image not found ';

  constructor() { }

  ngOnInit(): void {
  }

  getUser():string{
    return this.user;
  }
}
