import { Component } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Form Validations';

  onSubmit(form) {
    let val = form.value;

    let submittedPerson: Person;
    submittedPerson.FirstName = val.firstName;
    submittedPerson.LastName = val.lastName;
    submittedPerson.Email = val.email;
    submittedPerson.Phone= val.Phone;
    submittedPerson.Pass = val.pass;

    form.reset();

    return false;
  }
  showValue(value) {
    return JSON.stringify(value);
  }
}
