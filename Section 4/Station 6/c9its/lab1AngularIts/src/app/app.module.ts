import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //C#10bis aggiungiamo il FormsModule utile ad utilizzare le direttive utili alla creazione del form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
