import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Routing';
  constructor() {
    
  }

  ngOnInit(): void {
  }
}
