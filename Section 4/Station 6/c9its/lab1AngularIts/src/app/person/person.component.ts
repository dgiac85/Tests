import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  //C#2 questi dati serviranno per l'interpolazione che si applicherà al template html
  persons: Array<Person> = []; //va inizializzata oppure possiamo mettere il punto esclamativo
  url = 'http://www.google.com'
  isAddNewNOTWDB!: boolean;
  isAddNewTWDB!: boolean;
  isAddNewNGF!: boolean;

  // proprietà legate al form
  FirstName!: string;
  LastName!: string;


  //--lastC#17 il view child serve ad ottenere nella component class il controllo del componente definito nel template
  @ViewChild('myForm') personForm!: NgForm;
  constructor() {
    this.persons = new Array<Person>();
    this.reset();
    this.persons.push(new Person('Giacomo', 'Delfini'));
    this.persons.push(new Person('Mario', 'Rossi'));
    this.persons.push(new Person('Giuseppe', 'Verdi'));
  }

  save() {
    this.persons.push(new Person(this.FirstName, this.LastName));
    this.reset();
    this.isAddNewNOTWDB = false;
    this.isAddNewTWDB = false;
    this.isAddNewNGF = false;
  }

  cancel() {
    this.persons.pop();
  }

  reset() {
    this.FirstName = '';
    this.LastName = '';
    this.personForm?.reset();
  }

  addNewNOTWDB() {
    this.isAddNewNOTWDB= true;
    this.isAddNewTWDB = false
    this.isAddNewNGF = false
  }

  addNewTWDB() {
    this.isAddNewNOTWDB= false;
    this.isAddNewTWDB = true;
    this.isAddNewNGF = false;
  }

  addNewNGF() {
    this.isAddNewNOTWDB= false;
    this.isAddNewTWDB = false;
    this.isAddNewNGF = true;
  }

  //--C#10 FirstName e LastName ora tengono lo stato dei valori presenti nei textbox. ONE WAY BINDING
  changeFirstName(event: any) {
    this.FirstName = event.target.value;
  }

  changeLastName(event: any) {
    this.LastName = event.target.value;
  }

  ngOnInit() {
    this.isAddNewNOTWDB = false;
    this.isAddNewTWDB = false;
    this.isAddNewNGF = false;
  }
}



