import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  @Input() person: Person;
  @Output() finished: EventEmitter<boolean> = new EventEmitter<boolean>();

  personForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.personForm = new FormGroup({
      firstName: new FormControl(this.person.FirstName, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(this.person.LastName, Validators.required),
      email: new FormControl(this.person.Email, Validators.email),
      phone: new FormControl(this.person.Phone, Validators.pattern(/^[0][0-9]{10}$/)),
    });
  }

  get firstName() { return this.personForm.get('firstName'); }

  showValue(value) {
    return JSON.stringify(value);
  }

  onSubmit() {
    let formValue = this.personForm.value;
    this.person.FirstName = formValue.firstName;
    this.person.LastName = formValue.lastName;
    this.person.Email = formValue.email;
    this.person.Phone = formValue.phone;
    this.finished.emit(true);
  }

  onCancel() {
    this.finished.emit(false);
  }
}
