import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {

  @Input() person: Person;
  @Output() onEdit: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }

  editClick() {
    this.onEdit.emit(true);
  }

}
