import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { MenuComponent } from './menu/menu.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; // CLI imports router

const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-add', component: ContactAddComponent },
  { path: '', component: ContactListComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    RootComponent,
    MenuComponent,
    ContactListComponent,
    ContactItemComponent,
    ContactAddComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
