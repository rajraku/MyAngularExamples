import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'React style form & validations';
  isEdit: boolean = false;
  instancePerson: Person;

  constructor() {
    this.instancePerson = new Person();
    this.instancePerson.FirstName = "Raj Kumar";
    this.instancePerson.LastName = "Sri Ramulu";
    this.instancePerson.Email = "rajkumar.s@motivitylabs.com";
    this.instancePerson.Phone = "9989745736";
  }

  finished(e) {
    console.log(e); 
    this.isEdit=false
  }

  ngOnInit(): void {
  }
}
