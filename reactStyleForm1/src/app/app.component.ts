import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personForm: FormGroup;
  title = 'React style form & validations';
  controlCollection = {
    firstName: new FormControl('Raj', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.pattern(/^[0][0-9]{10}$/)),
  }

  ngOnInit(): void {    
    this.personForm = new FormGroup(this.controlCollection);
  }

  onSubmit() {
    let val = this.personForm.value;

    let submittedPerson: Person;
    submittedPerson.FirstName = val.firstName;
    submittedPerson.LastName = val.lastName;
    submittedPerson.Email = val.email;
    submittedPerson.Phone= val.Phone;

    this.personForm.reset();
    
    return false;
  }

  showValue(value) {
    return JSON.stringify(value);
  }

  get firstName() { return this.personForm.get('firstName'); }
}
