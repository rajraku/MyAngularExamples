import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../../models/person';
import {ActivatedRoute} from '@angular/router';
import {Employees} from '../../employees-list';

@Component({
  selector: 'person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() person: Person = new Person();
  
  constructor(private route: ActivatedRoute) {
    var currentRoute = route.snapshot;
    if(currentRoute.params && currentRoute.params.id) {
      for(var p of Employees) {
        if(p.Id == currentRoute.params.id) {
          this.person = p;
        }
      }
    }    
   }

  ngOnInit() {
  }

}
