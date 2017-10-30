import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic bindings';
  stringVal = "Custom String";
  myLoadText = "Display on Load";
  myMultiLineText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  tSwitch = false;
  twoWayText = "two-way binding";
  twoWayText2 = "two-way text";
  twoWayText1 = this.twoWayText;
  showAlert() {
    alert('Hello World');
  }

  toggleCheckText() {
    this.tSwitch = !this.tSwitch;
  }
}
